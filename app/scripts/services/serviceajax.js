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
    return {
      users: function () {
        return $http.get("https://trainee-api.pleiads.fr/users");
      },
      delete: function (id) {
        console.log(id)
        return $http.delete("https://trainee-api.pleiads.fr/users/" + id);
      },
      add: function (user) {
        return $http.post("https://trainee-api.pleiads.fr/users",user);
      },
      modify: function (id,user) {
        return $http.delete("https://trainee-api.pleiads.fr/users/" + id, user);
      }
    }
  });