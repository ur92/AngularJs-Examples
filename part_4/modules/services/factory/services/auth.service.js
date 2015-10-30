angular.module('app.auth.service', ['app.core'])
    .factory('AuthService', function (AppConstants) {

        var password = '';
        for (var i = 0; i < AppConstants.passwordLength; i++) {
            password += '9';
        }
        return password;

    });