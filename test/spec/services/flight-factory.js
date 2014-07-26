'use strict';

describe('Service: flightFactory', function () {

  // load the service's module
  beforeEach(module('angularCrudApp'));

  // instantiate service
  var flightFactory;
  beforeEach(inject(function (_flightFactory_) {
    flightFactory = _flightFactory_;
  }));

  it('should do something', function () {
    expect(!!flightFactory).toBe(true);
  });

});
