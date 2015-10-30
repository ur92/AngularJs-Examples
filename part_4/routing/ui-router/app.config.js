/**
 * Created by UR92 on 07/10/2015.
 */

angular.module('demo')
    .config(function ($locationProvider) {

    })
    .run(function($state){

        //$state.go('friends');
        $state.go('friends.list');

    });



