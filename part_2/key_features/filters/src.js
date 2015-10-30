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

    $scope.search = {
        gender: ''
    };

}

app.filter('over30Filter', function () {
    return function (input) {
        var filtered = [];

        angular.forEach(input, function (friend) {
            if (friend.age > 30)
                filtered.push(friend);
        });

        return filtered;
    }
});

app.filter('friendFormatFilter', function () {
    return function (input) {
        var res = input.gender === 'boy' ? 'Mr. ' : 'Ms. ';
        res += input.name + ' is ' + input.age + ' old';
        return res;
    }
});

