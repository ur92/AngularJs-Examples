/**
 * Created by UR92 on 07/10/2015.
 */

angular.module('demo')
    .config(function ($locationProvider) {

    })
    .run(function($state, $rootScope, $interval){

        //$state.go('friends');
        $state.go('friends.list');




















        
        /*var loadingInt;
        $rootScope.loadingMessage= "Loading";

        $rootScope.$on('$stateChangeStart', function(){
            $rootScope.resolving = true;
            loadingInt= $interval(function(){
                $rootScope.loadingMessage+='.';
            }, 500);
        });

        $rootScope.$on('$stateChangeSuccess', function(){
            $rootScope.resolving = false;

            //finish
        });*/

    });



