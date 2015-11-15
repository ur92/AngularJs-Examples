/**
 * Created by UR92 on 07/10/2015.
 */

angular.module('app.calc')
    .config(function ($stateProvider, $urlRouterProvider) {
        // Config 1 - Hierarchy states
        $stateProvider
            .state('math', {
                url: '/math',
                templateUrl: 'calc/math.html',
                controller: 'CalcController',
                controllerAs: 'calcCtrl',
                data: {
                    titleMath: 'My Route Calculator'
                },
                resolve: {
                    result: function () {
                        return {};
                    }
                }
            })
            .state('math.first', {
                url: '/:first',
                controller: 'CalcController',
                controllerAs: 'calcCtrl',
                templateUrl: 'calc/first.html',
                data: {
                    titleFirst: 'First param:'
                }
            })
            .state('math.first.action', {
                url: '/:action',
                controller: 'CalcController',
                controllerAs: 'calcCtrl',
                templateUrl: 'calc/action.html',
                data: {
                    titleAction: 'Action param: '
                }
            })
            .state('math.first.action.second', {
                url: '/:second',
                controller: 'CalcController',
                controllerAs: 'calcCtrl',
                templateUrl: 'calc/second.html',
                data: {
                    titleSecond: 'Second param: ',
                    subTitleSecond: 'Equals To: '
                },
                resolve: {
                    result: function ($stateParams) {
                        var res = 0;
                        var params= $stateParams;
                        var first= parseInt(params.first);
                        var second= parseInt(params.second);
                        switch (params.action) {
                            case 'plus':
                                res =  first+ second;
                                break;
                            case 'minus':
                                res = first - second;
                                break;
                            case 'multiply':
                                res = first * second;
                                break;
                            case 'divide':
                                res = first / second;
                                break;
                            default :
                                break;
                        }

                        return res;
                    }
                }
            });


    });




