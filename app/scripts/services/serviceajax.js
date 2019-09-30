'use strict';

/**
 * @ngdoc service
 * @name angularjsApp.serviceAjax
 * @description
 * # serviceAjax
 * Factory in the angularjsApp.
 */
angular.module('angularjsApp')
  .factory('serviceAjax', function serviceAjax($http) {
    return{
        users: function(){
            return $http.get("https://trainee-api.pleiads.fr/users");
        }
    }
  });