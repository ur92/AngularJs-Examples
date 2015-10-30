angular.module('app.core', [])
    .constant('AppConstants',
        {
            APP_NAME: 'My Demo App',
            VERSION: 1.2,
            passwordLength: 4
        }
    )
    .config(function(AuthServiceProvider, AppConstants){
        //AuthServiceProvider.setPasswordLength(AppConstants.passwordLength);
    });


