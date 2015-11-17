angular.module('app.chat')
    .directive('chatLogin', function () {
        return {
            templateUrl: 'chat/directives/chat-login/chat-login.html',
            scope: {
                loginFn: '=',
                usersList: '='
            },
            link: function (scope) {
                scope.userName = '';

                scope.login = function () {
                    scope.loginFn(scope.userName);
                };

                scope.isUsernameInvalid = function () {
                    if (scope.userName.trim() !== ''
                        && scope.usersList.indexOf(scope.userName) == -1)
                        return false;
                    else
                        return true;
                };
            }
        }


    });