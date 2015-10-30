/**
 * Created by UR92 on 07/10/2015.
 */

angular.module('app.friends')
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/friends',{
                controller:'FriendsController',
                controllerAs: 'friendsCtrl',
                templateUrl:'friends/list.html'
            })
            .when('/friends/info/:id',{
                controller:'FriendsController',
                controllerAs: 'friendsCtrl',
                templateUrl:'friends/info.html'
            })
            .when('/friends/edit/:id',{
                controller:'FriendsController',
                controllerAs: 'friendsCtrl',
                templateUrl:'friends/edit.html'
            })
            .when('/friends/delete/:id',{
                controller:'FriendsController',
                controllerAs: 'friendsCtrl',
                templateUrl:'friends/delete.html'
            })
            .otherwise({
                redirectTo:'/friends'
            });
    });



