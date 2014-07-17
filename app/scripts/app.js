'use strict';

/**
 * @ngdoc overview
 * @name angularCrudApp
 * @description
 * # angularCrudApp
 *
 * Main module of the application.
 */
angular
  .module('angularCrudApp', [
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
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/database', {
        templateUrl: 'views/database.html',
        controller: 'DatabaseCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
