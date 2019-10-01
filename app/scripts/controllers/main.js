'use strict';

/**
 * @ngdoc function
 * @name angularjsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularjsApp
 */
angular.module('angularjsApp',)
  .controller('MainCtrl', function ($scope,$rootScope, serviceAjax) {
   $rootScope.loadUsers = function(){
      $scope.loading = true;
      serviceAjax.users().then(function(response){
          $scope.users = response.data;
          $scope.loading = false;
      });
  };
  $rootScope.deleteUser = function(id){
    $scope.loading = true;
    serviceAjax.delete(id).then(function(){      
        $scope.loading = false;
        $rootScope.loadUsers()
    });
};
//Mm
  });
