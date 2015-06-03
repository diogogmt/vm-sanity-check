#!/bin/sh
#
# chkconfig:
# description:
# processname:
# config:
# pidfile:

PATH=$PATH:/home/ubuntu/node/bin
VM_SANITY_SCRIPT=/home/ubuntu/vm-sanity-check/express/bin/www
export PORT=80

NAME="$(basename $0)"
start() {
  echo -e "\n\nStarting vm-sanity-check"
 forever start $VM_SANITY_SCRIPT -l /var/log/vm-sanity-check.log -o /var/log/vm-sanity-check-out.log -e /var/log/vm-sanity-check-err.log -m 10 --pidFile /var/run/vm-sani
ty-check.pid
}

stop() {
  echo -e "\n\nStopping vm-sanity-check:"
  forever stop $VM_SANITY_SCRIPT
}

restart() {
  stop
  start
}

status() {
  echo -e "\n\nListing forever processes"
  forever list
}

# See how we were called.
case "$1" in
    status)
      status
    ;;
    start)
      start
    ;;
    stop)
      stop
    ;;
    restart)
      restart
    ;;
    *)
    echo $"Usage: $0 {start|stop|status|restart}"
    exit 2
esac

exit $RETVAL