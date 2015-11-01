/**
 * Created by UR92 on 07/10/2015.
 */

angular.module('app.friends')
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('restaurants',{
                url: '/restaurants',
                abstract: true,
                template: '<ui-view/>',
                resolve: {
                    restaurantsData: function(restaurantsRsc){
                        return restaurantsRsc.query().$promise;
                    }
                }
            })
            .state('restaurants.list',{
                url: '/list',
                templateUrl:'restaurants/list.html',
                controller:'RestaurantsController',
                controllerAs: 'restaurantsCtrl',
                resolve: {
                    simpleObj:  function(){
                        return {value: 'simple!'};
                    },
                    fromDb: function($q, $timeout){
                        var deferred = $q.defer();
                        $timeout(function() {
                            deferred.resolve('Hello!');
                        }, 5000);
                        return deferred.promise;
                    }
                }
            })
            .state('restaurants.info',{
                url: '/info/:id',
                templateUrl:'restaurants/info.html',
                controller:'RestaurantsController',
                controllerAs: 'restaurantsCtrl'
            })
            .state('restaurants.edit',{
                url: '/edit/:id',
                templateUrl:'restaurants/edit.html',
                controller:'RestaurantsController',
                controllerAs: 'restaurantsCtrl'
            })
            .state('restaurants.delete',{
                url: '/delete/:id',
                templateUrl:'restaurants/delete.html',
                controller:'RestaurantsController',
                controllerAs: 'restaurantsCtrl'
            });


        $urlRouterProvider.otherwise('/restaurants/list');
    });




