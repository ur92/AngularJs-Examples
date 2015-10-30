/**
 * Created by UR92 on 07/10/2015.
 */

angular.module('demoApp', [])
    .config(function($locationProvider, $logProvider){
        $locationProvider.html5Mode= true;
        $logProvider.debugEnabled= true;

        console.log('$locationProvider.html5Mode= '+$locationProvider.html5Mode);
        console.log('$logProvider.debugEnabled= '+$logProvider.debugEnabled);
        console.log('configuring some extra settings!');
    })
    .run(function(){
        console.log('running some startup code!');
        console.log('Welcome to my App!');
        alert('Welcome to my App!');
    });

/*
.constant('APP_SETTINGS', {
    html5Mode: true
});
*/

