'use strict';

/**
 * @ngdoc service
 * @name angularCrudApp.weatherService
 * @description
 * # weatherService
 * Service in the angularCrudApp.
 */
angular.module('angularCrudApp')
  .service('WeatherService', function WeatherService($q) {
    // AngularJS will instantiate a singleton by calling "new" on this function
        // Weather API (each returns a promise)
        var dfdForecast;
        return {
            getForecast: function (date) {
                if(!dfdForecast) {
                    console.log('Calling getForecast()');
                    dfdForecast = $q.defer();
                    dfdForecast.resolve({
                        date: date,
                        forecast: 'rain'
                    });
                }
                return dfdForecast.promise;
            }
        }
  });
