'use strict';

describe('Controller: DatabasecontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('angularCrudApp'));

  var DatabasecontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DatabasecontrollerCtrl = $controller('DatabasecontrollerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
