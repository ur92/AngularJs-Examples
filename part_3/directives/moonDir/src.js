/**
 * Created by UR92 on 07/10/2015.
 */

app = angular.module('demo', []);

app.directive('moonDir', function ($interval) {
        return {
            template: '<img ng-src="{{currentImage}}">',
            link: moonFn
        };

        function moonFn(scope, elem) {
            scope.currentImage = '';
            scope.index = 1;

            scope.setCurrentImage = function (index) {
                var zero = index < 10 ? '0' : '';
                scope.currentImage = 'images/lunar_' + zero + index + '.png';
            };

            scope.updateImage = function () {
                scope.setCurrentImage(scope.index);
                scope.index++;
            };

            scope.$watch('index', function () {
                if (scope.index === 24) {
                    scope.index=1;
                }
            });

            var task = $interval(function () {
                scope.updateImage();
            }, 200);

            elem.on('$destroy', function () {
                $interval.cancel(task);
            })
        }
    }
);


app.controller('MainController', demoController);

function demoController($scope) {

}



