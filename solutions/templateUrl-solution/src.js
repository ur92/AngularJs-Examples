/**
 * Created by UR92 on 07/10/2015.
 */

var app = angular.module('demo', ['ngAnimate']);


app.controller('MainController', demoController);

function demoController($scope) {
    // init
    $scope.friends = [

    ];

    $scope.deleteFn = function (friend) {
        console.log('Controller: delete friend!');
        $scope.friends.splice($scope.friends.indexOf(friend), 1);
    };

    $scope.createModel = null;

    $scope.startCreate= function(){
        $scope.createModel = {
            name: '',
            age: 1,
            gender: ''
        };

        $scope.friends.splice(0,0,$scope.createModel);
    };

    $scope.createFn = function () {
        $scope.createModel= null;
    };

    $scope.cancelFn= function(friend){
        $scope.friends.splice($scope.friends.indexOf(friend),1);
        $scope.createModel= null;
    };
}



