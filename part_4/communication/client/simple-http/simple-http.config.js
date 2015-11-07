angular.module('app.simple-http')
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('simple-http', {
                url: '/simple-http',
                templateUrl: 'simple-http/simple-http.html',
                controller: 'SimpleHttpCtrl',
                controllerAs: 'simpleCtrl'
            });
    });




