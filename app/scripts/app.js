'use strict';

/**
 * @ngdoc overview
 * @name vmSanityCheckApp
 * @description
 * # vmSanityCheckApp
 *
 * Main module of the application.
 */
angular
  .module('vmSanityCheckApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/sanity.html',
        controller: 'SanityCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
