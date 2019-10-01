'use strict';

/**
 * @ngdoc function
 * @name angularjsApp.controller:UserformCtrl
 * @description
 * # UserformCtrl
 * Controller of the angularjsApp
 */
angular.module('angularjsApp')
  .controller('UserformCtrl', function ($scope, $rootScope, serviceAjax) {
    $scope.addUser = function(user){
      $scope.loading = true;
      serviceAjax.add(user).then(function(response){
          $scope.users = response.data;
          $scope.loading = false;
          window.location = "/#!"
      });
  };
  });
