/**
 * Created by UR92 on 07/10/2015.
 */

app = angular.module('demo', []);

app.controller('MainController', demoController);

function demoController($scope, $log) {
    // init
    $scope.friends = [
        {name: 'John', age: 25, gender: 'boy'},
        {name: 'Jessie', age: 30, gender: 'girl'},
        {name: 'Johanna', age: 28, gender: 'girl'},
        {name: 'Joy', age: 15, gender: 'girl', checked: true},
        {name: 'Mary', age: 28, gender: 'girl'},
        {name: 'Peter', age: 95, gender: 'boy', checked: true},
        {name: 'Sebastian', age: 50, gender: 'boy'},
        {name: 'Erika', age: 27, gender: 'girl'},
        {name: 'Patrick', age: 40, gender: 'boy'},
        {name: 'Samantha', age: 60, gender: 'girl'},
        {name: 'Peter', age: 95, gender: 'boy', checked: true},
        {name: 'Sebastian', age: 50, gender: 'boy'},
        {name: 'Erika', age: 27, gender: 'girl'},
        {name: 'Patrick', age: 40, gender: 'boy'}
    ];

    $scope.setClass= function(friend, colorName){
        friend.color= colorName;
    };

    $scope.getMoreRows= function(){
        $scope.rowsToShow+=3;
    };

    $scope.checkPassword= function(){
        if($scope.password.length<4){
            $scope.loginMsg= 'Password to short!';
        }
        else if($scope.password==='strong password'){
            $scope.loginMsg= '**** You are logged in!!! ****';
        }
        else{
            $scope.loginMsg= 'Error! Try again!!!';
        }

    }
}