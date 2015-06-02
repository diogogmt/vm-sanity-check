'use strict';

describe('Controller: SanityCtrl', function () {

  // load the controller's module
  beforeEach(module('vmSanityCheckApp'));

  var SanityCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SanityCtrl = $controller('SanityCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
