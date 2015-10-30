/**
 * Created by UR92 on 07/10/2015.
 */

app = angular.module('demo', []);

app.directive('mrPrefix', function () {
    return {
        require: 'ngModel',
        link: function (scope, elm, attrs, ctrl) {
            ctrl.$validators.mrPrefix = function (modelValue, viewValue) {
                if (angular.isDefined(viewValue)) {
                    var inp=viewValue.toString().toLowerCase().trim()
                    if (inp.startsWith('mr') || inp.startsWith('ms') || inp.startsWith('mss')) {
                            return true;
                    }
                    return false;
                }
            };
        }
    };
});

app.controller('MainController', demoController);

function demoController($scope) {
    // init


}




