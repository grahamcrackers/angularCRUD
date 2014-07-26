'use strict';

/**
 * @ngdoc function
 * @name angularCrudApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularCrudApp
 */
angular.module('angularCrudApp')
  .controller('MainCtrl', function ($scope, $cookies, databaseFactory) {

    var dbF = databaseFactory;

    //Testing Cookies
    $cookies.myCookie = 'oatmeal';

    console.log($cookies.myCookie);


    dbF.getAllUsers().then(function(users){
        $scope.allUsers = users;
    });



    function cookieinfo() {
        chrome.cookies.getAllCookieStores(function (cookiestores) {
            for (i = 0; i < cookiestores.length; i++) {
                console.log(JSON.stringify(cookiestores[i]));
            }
        });
    }
    window.onload = cookieinfo;
  });
