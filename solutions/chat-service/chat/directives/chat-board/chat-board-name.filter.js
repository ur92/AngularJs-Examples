angular.module('app.chat')
    .filter('chatBoardName', function () {
        return function (userName, myUserName) {
            return userName == myUserName ? 'Me' : userName;
        }
    });