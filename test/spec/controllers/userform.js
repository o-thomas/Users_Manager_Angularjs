'use strict';

describe('Controller: UserformCtrl', function () {

  // load the controller's module
  beforeEach(module('angularjsApp'));

  var UserformCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UserformCtrl = $controller('UserformCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(UserformCtrl.awesomeThings.length).toBe(3);
  });
});
