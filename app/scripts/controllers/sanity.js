'use strict';

/**
 * @ngdoc function
 * @name vmSanityCheckApp.controller:SanityCtrl
 * @description
 * # SanityCtrl
 * Controller of the vmSanityCheckApp
 */
angular.module('vmSanityCheckApp')
  .controller('SanityCtrl', function ($scope, sanity) {
    sanity.os(function (err, data) {
      $scope.os = data;
      console.log('os: ', data);
    });

    sanity.cpus(function (err, data) {
      $scope.cpus = data;
      console.log('cpus: ', data);
    });

    sanity.memory(function (err, data) {
      $scope.memory = data;
      console.log('memory: ', data);
    });

    sanity.storage(function (err, data) {
      $scope.storage = data;
      console.log('storage: ', data);
    });

    sanity.networkInterfaces(function (err, data) {
      $scope.networkInterfaces = data.interfaces;
      $scope.totalInterfaces = data.total;
      console.log('networkInterfaces: ', data);
    });
  });
