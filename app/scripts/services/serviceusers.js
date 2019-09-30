'use strict';

/**
 * @ngdoc service
 * @name angularjsApp.serviceUsers
 * @description
 * # serviceUsers
 * Factory in the angularjsApp.
 */
angular.module('angularjsApp')
  .factory('serviceUsers', function serviceUsers($http) {
    return{
      users: function(){
          return $http.get("https://trainee-api.pleiads.fr/users");
      }
    };
  });
