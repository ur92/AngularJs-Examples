/**
 * Created by UR92 on 07/10/2015.
 */

angular.module('app.calc')
    .controller('CalcController', calcController);

function calcController($stateParams, $state, result) {
    var vm= this;

    vm.params= $stateParams;
    vm.data= $state.current.data;
    vm.result= result;


}


