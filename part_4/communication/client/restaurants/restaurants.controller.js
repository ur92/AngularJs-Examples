angular.module('app.restaurants')
    .controller('RestCtrl', restCtrl);

function restCtrl(restData, restRsc, $stateParams, $filter, $state) {
    var vm = this;

    // API
    vm.list = restData;

    vm.isExpandable= isExpandable;

    vm.add = add;
    vm.update = update;
    vm.delete = remove;

    vm.init = init;

    // INIT
    vm.init($stateParams.id);


    function add(item) {
        new restRsc(item).$save(function (data) {
            vm.list.push(data);
        });
    }

    function update() {
        vm.currentItem.$save(function(){
            $state.go('restaurants.list');
        });

    }

    function remove() {
        vm.currentItem.$remove(function(){
            vm.list.splice(vm.list.indexOf(vm.currentItem),1);
            $state.go('restaurants.list');
        });
    }

    function init(id){
        if(angular.isDefined(id)){
            var item= $filter('filter')(vm.list, {_id: id})[0];
            if(angular.isDefined(item)){
                vm.currentItem=item;
            }
        }
    }

    function isExpandable(value){
        return (angular.isArray(value) || angular.isObject(value));
    }

}

