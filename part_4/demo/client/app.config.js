/**
 * Created by UR92 on 07/10/2015.
 */

angular.module('demo')
    .constant('appConstants', {
        name: 'My Demo',
        baseUrl: 'http://localhost:3000/api/v1'
    })
    .run(function ($state, $rootScope, $interval) {

        var loadingInt;
        $rootScope.loadingMessage = "Loading";
        $rootScope.resolving= true;

        $rootScope.$on('$stateChangeStart', function () {
            $rootScope.resolving = true;
            loadingInt = $interval(function () {
                $rootScope.loadingMessage += '.';
            }, 500);
        });

        $rootScope.$on('$stateChangeSuccess', function () {
            $rootScope.resolving = false;

            $interval.cancel(loadingInt);
        });

        $state.go('restaurants.list');

    });



