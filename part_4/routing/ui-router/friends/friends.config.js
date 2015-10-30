/**
 * Created by UR92 on 07/10/2015.
 */

angular.module('app.friends')
    .config(function ($stateProvider, $urlRouterProvider) {
        // Config 1 - Hierarchy states
        $stateProvider
            .state('friends',{
                url: '/friends',
                controller:'FriendsController',
                controllerAs: 'friendsCtrl',
                templateUrl:'friends/list.html'
            })
            .state('friends.info',{
                url: '/info/:id',
                controller:'FriendsController',
                controllerAs: 'friendsCtrl',
                templateUrl:'friends/info.html'
            })
            .state('friends.edit',{
                url: '/edit/:id',
                controller:'FriendsController',
                controllerAs: 'friendsCtrl',
                templateUrl:'friends/edit.html'
            })
            .state('friends.delete',{
                url: '/delete/:id',
                controller:'FriendsController',
                controllerAs: 'friendsCtrl',
                templateUrl:'friends/delete.html'
            });



        // Config 2 - Abstract State
        /*$stateProvider
            .state('friends', {
                url: '/friends',
                abstract: true,
                template: "<ui-view/>"
            })
            .state('friends.list', {
                url: '/list',
                controller: 'FriendsController',
                controllerAs: 'friendsCtrl',
                templateUrl: 'friends/list.html'
            })
            .state('friends.info', {
                url: '/info/:id',
                controller: 'FriendsController',
                controllerAs: 'friendsCtrl',
                templateUrl: 'friends/info.html'
            })
            .state('friends.edit', {
                url: '/edit/:id',
                controller: 'FriendsController',
                controllerAs: 'friendsCtrl',
                templateUrl: 'friends/edit.html'
            })
            .state('friends.delete', {
                url: '/delete/:id',
                controller: 'FriendsController',
                controllerAs: 'friendsCtrl',
                templateUrl: 'friends/delete.html'
            });*/



        // Config 3 - With controller inheritance
        /*$stateProvider
            .state('friends',{
                url: '/friends',
                abstract: true,
                template: '<ui-view ng-controller="FriendsController as friendsCtrl"/>'
            })
            .state('friends.list',{
                url: '/list',
                templateUrl:'friends/list.html'
            })
            .state('friends.info',{
                url: '/info/:id',
                templateUrl:'friends/info.html'
            })
            .state('friends.edit',{
                url: '/edit/:id',
                templateUrl:'friends/edit.html'
            })
            .state('friends.delete',{
                url: '/delete/:id',
                templateUrl:'friends/delete.html'
            });*/




        // Config 4 - With resolve
        /*$stateProvider
            .state('friends',{
                url: '/friends',
                abstract: true,
                template: '<ui-view/>'
            })
            .state('friends.list',{
                url: '/list',
                templateUrl:'friends/list.html',
                controller:'FriendsController',
                controllerAs: 'friendsCtrl',
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
            .state('friends.info',{
                url: '/info/:id',
                templateUrl:'friends/info.html',
                controller:'FriendsController',
                controllerAs: 'friendsCtrl'
            })
            .state('friends.edit',{
                url: '/edit/:id',
                templateUrl:'friends/edit.html',
                controller:'FriendsController',
                controllerAs: 'friendsCtrl'
            })
            .state('friends.delete',{
                url: '/delete/:id',
                templateUrl:'friends/delete.html',
                controller:'FriendsController',
                controllerAs: 'friendsCtrl'
            });*/


        //$urlRouterProvider.otherwise('/friends/list');
    });




