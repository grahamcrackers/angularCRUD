'use strict';

/**
 * @ngdoc service
 * @name angularCrudApp.databaseFactory
 * @description
 * # databaseFactory
 * Factory in the angularCrudApp.
 */
angular.module('angularCrudApp')
  .factory('databaseFactory', function ($http, $q) {
    //Constants
    var expressServer = "http://express:3000/api";

    // Service logic

    //Data for postUser config
    var postUserConfig = {
        name: "Graham"
    };

    // Public API here
    return {
        testApi: function() {
            //testing api, should return "Hello World"
            var deferred = $q.defer();

            $http.get(expressServer)
                .success(function (data, status) {
                    deferred.resolve(data);
                    console.log('Status: ' + status + '\n' + 'Data: ');
                    console.log(data);
                })
                .error(function (data, status) {
                    console.log(status);
                });

            return deferred.promise;
        },
        // Gets all users
        getAllUsers: function () {
            var deferred = $q.defer();

            $http.get(expressServer + '/users')
                .success(function(data, status, headers, config){
                    deferred.resolve(data);
                    console.log('Status: ' + status + '\n' + 'Data: ');
                    console.log(data);
                })
                .error(function(data,status,headers,config){
                    deferred.reject(data);
                    console.log(status);
                });

            return deferred.promise;
        },
        //Post a single user (requires name)
        postUser: function(user) {
            var deferred = $q.defer();
            $http.post(expressServer + '/users', {name: user.name})
                .success(function(data, status, headers, config){
                    deferred.resolve(data);
                    console.log('User was saved to the database!')
                })
                .error(function(data,status,headers,config){
                    deferred.reject(data);
                    console.log(status);
                });

            return deferred.promise;
        }
    }
});
