'use strict';

/**
 * @ngdoc service
 * @name angularCrudApp.travelService
 * @description
 * # travelService
 * Service in the angularCrudApp.
 */
angular.module('angularCrudApp')
  .service('TravelService', function TravelService($q) {
    // AngularJS will instantiate a singleton by calling "new" on this function
        var dfdDeparture,
            dfdFlight;

        return {
            getDeparture : function( user )
            {
                if(!dfdDeparture) {
                    console.log('Calling getDeparture()');
                    dfdDeparture = $q.defer();

                    // Mock departure information for the user's flight

                    dfdDeparture.resolve({
                        userID: user.email,
                        flightID: "UA_343223",
                        date: "01/14/2014 8:00 AM"
                    });
                }
                return dfdDeparture.promise;

            },
            getFlight : function( flightID )
            {
                if(!dfdFlight) {
                    console.log('Calling getFlight()');
                    dfdFlight = $q.defer();
                    dfdFlight.resolve({
                        id: flightID,
                        pilot: "Captain Morgan",
                        plane: {
                            make: "Boeing 747 RC",
                            model: "TA-889"
                        },
                        status: "onTime"
                    });
                }
                return dfdFlight.promise;
            }
        };
  });
