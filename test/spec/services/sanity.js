'use strict';

describe('Service: sanity', function () {

  // load the service's module
  beforeEach(module('vmSanityCheckApp'));

  // instantiate service
  var sanity;
  beforeEach(inject(function (_sanity_) {
    sanity = _sanity_;
  }));

  it('should do something', function () {
    expect(!!sanity).toBe(true);
  });

});
