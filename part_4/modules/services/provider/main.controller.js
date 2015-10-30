angular.module('demoApp')
    .controller('MainController', function(AppConstants, AuthService)
        {
            var vm= this;
            vm.appConstants = AppConstants;

            //vm.authState= AuthService.state;
        }
    );
