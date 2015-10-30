angular.module('app.second')
    .controller('SecondController', SecondController);

function SecondController(AppValues) {
    var vm = this;

    vm.controllerName = 'SecondController';
    vm.appValues = AppValues;

    vm.increaseViews = function () {
        vm.appValues.views++;
    };

    vm.increaseLikes = function () {
        vm.appValues.likes++;
    };

}





