'use strict';

/**
 * @ngdoc service
 * @name angularCrudApp.databaseService
 * @description
 * # databaseService
 * Service in the angularCrudApp.
 */
angular.module('angularCrudApp')
  .service('DatabaseService', function DatabaseService(databaseFactory) {
    // AngularJS will instantiate a singleton by calling "new" on this function

        // Variables
        var allUsers;

        return {
            getAllUsers: function(){
                if(!allUsers){
                    allUsers = databaseFactory.getAllUsers();
                }
                return allUsers;
            }
        };




//        return {
//            qdata : function(callback) {
//                if (!result) {
//                    result = $http.get('question2.json').success(callback);
//                }
//                return result;
//            },
//            refreshQdata : function (callback) {
//                return $http.get('question2.json').success(callback);
//            }
  });
