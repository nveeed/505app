'use strict';

angular.module('Home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'pages/home/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', ['$http', '$scope', function ( $http, scope ) {
        $.showMessage("yeeehaaa");
    //$http.get("http://505.enaveed.com/web/index.php/api/food-items/get").then(function (response) {
    //    scope.foodItems = response.data.data;
    //});
}]);