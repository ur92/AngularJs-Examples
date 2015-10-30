angular.module('app.login.directive', [])
    .directive('login', function (AppConstants, AuthService) {
        return {
            restrict: 'EA',
            templateUrl: 'directives/login.html',
            link: function (scope) {
                scope.loginForm = {
                    email: 'ur92.ed@gmail.com'
                };

                scope.state = AuthService.state;

                scope.login = function () {
                    AuthService.login(scope.loginForm.email, scope.loginForm.password);
                }
            }
        }
    });