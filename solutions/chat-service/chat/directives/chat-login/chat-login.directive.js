angular.module('app.chat')
    .directive('chatLogin', function () {
        return {
            templateUrl: 'chat/directives/chat-login/chat-login.html',
            scope: {
                loginFn: '='
            },
            link: function (scope) {
                scope.login= function(){
                    scope.loginFn(scope.userName);
                }
            }
        }


    });