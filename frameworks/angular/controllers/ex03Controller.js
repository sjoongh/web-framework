// ex03Controller.js

var myApp = angular.module('app', []);
// controller("컨트롤러이름", function($scope) { })
myApp
    .controller("ex03Controller", function($scope) {
        $scope.controllerName = "app.ex03Controller";
    })