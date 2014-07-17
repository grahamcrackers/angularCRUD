'use strict';

/**
 * @ngdoc function
 * @name angularCrudApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularCrudApp
 */
angular.module('angularCrudApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
