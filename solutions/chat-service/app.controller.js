angular.module('chatApp')
    .controller('MainCtrl', mainCtrl);

function mainCtrl(AppConstants){
    var vm= this;

    vm.appName= AppConstants.APP_NAME;
}



