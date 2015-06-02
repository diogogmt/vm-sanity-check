'use strict';

/**
 * @ngdoc service
 * @name vmSanityCheckApp.sanity
 * @description
 * # sanity
 * Service in the vmSanityCheckApp.
 */
angular.module('vmSanityCheckApp')
  .service('sanity', function ($http) {
    return {
      os: function (cb) {
        $http.get('/sanity/os').success(function(data) {
          cb(null, data);
        });
      },
      cpus: function (cb) {
        $http.get('/sanity/cpu').success(function(data) {
          cb(null, data);
        });
      },
      memory: function (cb) {
        $http.get('/sanity/memory').success(function(data) {
          cb(null, data);
        });
      },
      storage: function (cb) {
        $http.get('/sanity/storage').success(function(data) {
          cb(null, data);
        });
      },
      networkInterfaces: function (cb) {
        $http.get('/sanity/interfaces').success(function(data) {
          cb(null, data);
        });
      }
    }
  });
