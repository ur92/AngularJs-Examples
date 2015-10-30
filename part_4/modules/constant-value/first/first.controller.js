angular.module('app.first')
    .controller('FirstController', FirstController);

function FirstController(AppValues) {
    var vm = this;

    vm.controllerName = 'FirstController';
    vm.appValues = AppValues;

    vm.increaseViews = function () {
        vm.appValues.views++;
    };

    vm.increaseLikes = function () {
        vm.appValues.likes++;
    };
}





