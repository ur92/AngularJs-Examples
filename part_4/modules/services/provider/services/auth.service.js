angular.module('app.auth.service', [])
    .provider('AuthService', authServiceProvider);


function authServiceProvider() {
    var passwordLength = 2;

    this.setPasswordLength = function (_length) {
        passwordLength = _length;
    };

    this.$get = function(){
        return new authServiceConstructor();
    };

    function authServiceConstructor() {

        function generatePassword(_length) {
            var password = '';
            for (var i = 0; i < _length; i++) {
                password += '9';
            }
            return password;
        }

        this.password = generatePassword(passwordLength);
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


}