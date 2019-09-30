'use strict';

/**
 * @ngdoc function
 * @name angularjsApp.controller:UsersCtrl
 * @description
 * # UsersCtrl
 * Controller of the angularjsApp
 */
angular.module('angularjsApp')
  .controller('UsersCtrl', function ($scope, serviceAjax) {
    var loadUsers = function(){
      $scope.loading = true;
      serviceAjax.users().then(function(response){
          $scope.users = response.data.results;
          $scope.loading = false;
          console.log(response.data)
      });
  };
  loadUsers()
  });
