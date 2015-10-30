/**
 * Created by UR92 on 07/10/2015.
 */

app = angular.module('demo', []);

app.controller('MainController', demoController);

function demoController($scope, $log) {
    $scope.foo = 5;
    $scope.bar = {
        innerProperty: 10
    };

}