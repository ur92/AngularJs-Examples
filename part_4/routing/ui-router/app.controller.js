/**
 * Created by UR92 on 07/10/2015.
 */

angular.module('demo')
    .controller('MainController', function($location, $rootScope, $state){
        var vm= this;

        $rootScope.$on('$routeChangeStart', function(){
            vm.resolving= true;
        });

        $rootScope.$on('$routeChangeSuccess', function(){
            vm.resolving= false;
        });
    });




