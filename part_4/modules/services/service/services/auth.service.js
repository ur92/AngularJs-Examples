angular.module('app.auth.service', ['app.core'])
    .service('AuthService', authServiceConstructor);

function authServiceConstructor(AppConstants) {

    function generatePassword() {
        var password = '';
        for (var i = 0; i < AppConstants.passwordLength; i++) {
            password += '9';
        }
        return password;
    }

    this.password = generatePassword();
    this.email = 'ur92.ed@gmail.com';

    this.state = {
        loggedIn: false,
        error: false
    };

    this.login = function (email, pass) {
        if (email === this.email && pass === this.password) {
            this.state.loggedIn = true;
            this.state.error = false;
            console.log(this.state);
        }
        else {
            this.state.error = true;
        }
    };

}