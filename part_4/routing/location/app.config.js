/**
 * Created by UR92 on 07/10/2015.
 */

angular.module('demo')
    .constant('AuthState',{
        LOGGED_IN: false
    })
    .run(function($rootScope, $location, AuthState){
        $rootScope.$on('$locationChangeSuccess',function(event, newLoc, oldLoc){
            console.log('newLoc: '+newLoc);
            console.log('oldLoc: '+oldLoc);
            console.log(event);
        });

        /*$location.url('/home/base2?sdf=fff#hfhgh');
        if(AuthState.LOGGED_IN){
            $location.path('/home');
        }
        else{
            $location.url('/login');
        }*/
    });


// location change start
// config false auth
