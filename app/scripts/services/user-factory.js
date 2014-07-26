'use strict';

/**
 * @ngdoc service
 * @name angularCrudApp.userFactory
 * @description
 * # userFactory
 * Factory in the angularCrudApp.
 */
angular.module('angularCrudApp')
  .factory('user', function () {

    // Public API here
    return {
        email:'gmrogers04@gmail.com',
        repository: 'https://github.com/grahamcrackers/angularCRUD'
    }

  });
