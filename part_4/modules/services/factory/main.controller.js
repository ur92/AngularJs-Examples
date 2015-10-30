angular.module('demoApp')
    .controller('MainController', function(AppConstants)
        {
            var vm= this;
            vm.appConstants = AppConstants;
        }
    );
