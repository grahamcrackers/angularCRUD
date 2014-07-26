'use strict';

/**
 * @ngdoc function
 * @name angularCrudApp.controller:PromisesCtrl
 * @description
 * # PromisesCtrl
 * Controller of the angularCrudApp
 */
angular.module('angularCrudApp')
  .controller('PromisesCtrl', function ($scope, $q, user, TravelService, WeatherService) {

    var loadDeparture = function(user){


        return TravelService
                .getDeparture(user)
                .then(function(departure){

                    $scope.departure = departure;


                    return departure.flightID;
                })
        },
        loadFlight = function(flightID){
            console.log(flightID);
            return TravelService.getFlight(flightID).then(function(flight){
                console.log(flight);
                $scope.flight = flight;

                return flight;
            })
        },
        loadForecast = function(){
            return WeatherService
                    .getForecast($scope.departure.date)
                    .then(function(weather){
                        $scope.weather = weather;

                        return weather;
                })
        };

    loadDeparture(user)
        .then(loadFlight)
        .then(loadForecast);


    $scope.user = user;
    $scope.departure  = null;
    $scope.flight     = null;
    $scope.weather    = null;

  });
