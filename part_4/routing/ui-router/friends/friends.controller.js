/**
 * Created by UR92 on 07/10/2015.
 */

angular.module('app.friends')
    .controller('FriendsController', friendsController);

function friendsController($stateParams, $state, $filter) {
    var vm= this;

    vm.$state= $state;

    /*vm.simpleObj= simpleObj;
    vm.fromDb= fromDb;*/
    //vm.loading= false;


    vm.currentItem={};

    vm.friends = [
        {id: 1, name: 'John', age: 25, gender: 'boy'},
        {id: 2, name: 'Jessie', age: 30, gender: 'girl'},
        {id: 3, name: 'Johanna', age: 28, gender: 'girl'},
        {id: 4, name: 'Joy', age: 15, gender: 'girl', checked: true},
        {id: 5, name: 'Mary', age: 28, gender: 'girl'},
        {id: 6, name: 'Peter', age: 95, gender: 'boy', checked: true},
        {id: 7, name: 'Sebastian', age: 50, gender: 'boy'},
        {id: 8, name: 'Erika', age: 27, gender: 'girl'},
        {id: 9, name: 'Patrick', age: 40, gender: 'boy'},
        {id: 10, name: 'Samantha', age: 60, gender: 'girl'},
        {id: 11, name: 'Peter', age: 95, gender: 'boy', checked: true},
        {id: 12, name: 'Sebastian', age: 50, gender: 'boy'},
        {id: 13, name: 'Erika', age: 27, gender: 'girl'},
        {id: 14, name: 'Patrick', age: 40, gender: 'boy'}
    ];


    function init(id){
        if(angular.isDefined(id)){
            var _id= parseInt(id);
            var item= $filter('filter')(vm.friends, {id: _id})[0];
            if(angular.isDefined(item)){
                vm.currentItem=item;
            }
        }
    }

    init($stateParams.id);

    /*$rootScope.$on('$stateChangeSuccess', function(){
        console.log($stateParams.id);
        init($stateParams.id);
    });*/

    /*$rootScope.$on('$stateChangeSuccess', function(event, toState, toParams){
        init(toParams.id);
    });*/
}


