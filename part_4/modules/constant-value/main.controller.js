angular.module('demoApp')
    .controller('MainController', function(AppConstants, AppValues)
        {
            var vm= this;
            vm.appConstants = AppConstants;
            vm.appValues = AppValues;
        }
    );
