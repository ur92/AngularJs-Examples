/**
 * Created by UR92 on 07/10/2015.
 */

angular.module('demo')
    .config(function ($locationProvider) {

    })
    .run(function($state, $rootScope, $interval){

        $state.go('math.first.action.second', {first: 5, action: 'plus', second: 10});

    });



