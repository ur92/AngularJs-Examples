/**
 * Created by UR92 on 07/10/2015.
 */

angular.module('demo')
    .constant('appConstants', {
        name: 'My Demo',
        baseUrl: 'http://localhost:3000/api/v1'
    })
    .run(function($state){

        $state.go('restaurants.list');

    });



