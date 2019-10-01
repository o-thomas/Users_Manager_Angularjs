'use strict';

/**
 * @ngdoc function
 * @name angularjsApp.controller:UsersCtrl
 * @description
 * # UsersCtrl
 * Controller of the angularjsApp
 */
angular.module('angularjsApp')
  .controller('UsersCtrl', function ($scope,$rootScope, serviceAjax) {
  
  $rootScope.loadUsers()
  });
//mr