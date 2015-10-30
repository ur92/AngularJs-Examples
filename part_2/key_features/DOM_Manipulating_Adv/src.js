/**
 * Created by UR92 on 07/10/2015.
 */

app= angular.module('demo',[]);

app.controller('MainController', demoController);

function demoController($scope, $log){
    // init
    $scope.isDivVisible= false;

    $scope.showHideDiv= function(){
        $scope.isDivVisible= !$scope.isDivVisible;
    };

    $scope.colors=['black','yellow','blue','red','grey','purple','pink','orange'];
    $scope.colorIndex= 0;

}