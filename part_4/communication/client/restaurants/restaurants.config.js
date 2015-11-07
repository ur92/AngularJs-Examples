angular.module('app.restaurants')
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('restaurants', {
                url: '/restaurants',
                abstract: true,
                template: '<ui-view/>',
                resolve: {
                    restData: function (restRsc) {
                        return restRsc.query(
                            {
                                sort: 'name',
                                limit: 5000
                            }
                        ).$promise;
                    }
                }
            })
            .state('restaurants.list', {
                url: '/list',
                templateUrl: 'restaurants/list.html',
                controller: 'RestCtrl',
                controllerAs: 'restCtrl'
            })
            .state('restaurants.info', {
                url: '/info/:id',
                templateUrl: 'restaurants/info.html',
                controller: 'RestCtrl',
                controllerAs: 'restCtrl'
            })
            .state('restaurants.edit', {
                url: '/edit/:id',
                templateUrl: 'restaurants/edit.html',
                controller: 'RestCtrl',
                controllerAs: 'restCtrl'
            })
            .state('restaurants.delete', {
                url: '/delete/:id',
                templateUrl: 'restaurants/delete.html',
                controller: 'RestCtrl',
                controllerAs: 'restCtrl'
            });
    });




