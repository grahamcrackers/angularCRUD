'use strict';

/**
 * @ngdoc function
 * @name angularCrudApp.controller:DatabaseCtrl
 * @description
 * # DatabaseCtrl
 * Controller of the angularCrudApp
 */
angular.module('angularCrudApp')
  .controller('DatabaseCtrl', function ($scope, $q, databaseFactory) {

        // Shorten the factory name
        var dbF = databaseFactory;

        // Get all users from database and assign them to scope
        dbF.getAllUsers().then(function(allUsers){
            $scope.allUsers = allUsers;
        });



        // When clicking the submit button, it will post data to the database
        $scope.submitUser = function(){
            dbF.postUser($scope.user).then(getErrbody());
        };




  });
