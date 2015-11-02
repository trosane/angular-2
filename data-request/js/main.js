// Create application
var app = angular.module('myApp', []);
var ctrl = app.controller('myCtrl', function($scope, $http) {
    $http.get('http://www.w3schools.com/angular/customers.php').then(function(response) {
        $scope.names = response.data.records;
    });
});

// Bind controller customersCtrl
