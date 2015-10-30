/**
 * Created by UR92 on 07/10/2015.
 */

app = angular.module('demo', []);


app.controller('MainController', demoController);

function demoController($scope) {
    var vm = this;
    vm.score = 0;

    vm.reset = function () {
        vm.first = vm.getRandom(30);
        vm.second = vm.getRandom(30);
    };
    vm.add = function () {
        vm.score += vm.first + vm.second;
        vm.reset();
    };

    vm.getRandom = function (maxLimit) {
        return Math.ceil(Math.random() * maxLimit);
    };

    vm.reset();
}

app.directive('mySolution', function () {
    return {
        scope: {
            expected: '@'
        },
        require: 'ngModel',
        link: function (scope, elm, attrs, ctrl) {
            ctrl.$validators.mySolution = function (modelValue, viewValue) {
                return (angular.isDefined(viewValue) && viewValue === scope.expected);
            };
        }
    };
});
