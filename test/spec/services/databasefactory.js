'use strict';

describe('Service: databaseFactory', function () {

  // load the service's module
  beforeEach(module('angularCrudApp'));

  // instantiate service
  var databaseFactory;
  beforeEach(inject(function (_databaseFactory_) {
    databaseFactory = _databaseFactory_;
  }));

  it('should do something', function () {
    expect(!!databaseFactory).toBe(true);
  });

});
