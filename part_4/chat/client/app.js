/**
 * Created by UR92 on 10/09/2015.
 */
var modules = [
    'ngResource',
    'ui.bootstrap',
    'ui.router',
    'btford.socket-io'
];

var app = angular.module('demo', modules);

app.config(config);

function config($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/chat');

    $stateProvider
        .state('chat', {
            templateUrl: 'chat/chat.html',
            url: '/chat',
            controller: 'ChatCtrl as chat'
        })

}