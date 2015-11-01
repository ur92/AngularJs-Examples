angular.module('app.restaurants')
    .controller('RestaurantsCtrl', restaurantsCtrl);
app.config(config);

function restaurantsCtrl(restaurantsData, restaurantsRsc, $stateParams, $filter) {
    var vm = this;

    // API
    vm.list = restaurantsData;

    vm.add = add;
    vm.update = update;
    vm.delete = remove;

    vm.init = init;

    // INIT
    vm.init($stateParams.id);


    function add(item) {
        new restaurantsRsc(item).$save(function (data) {
            vm.list.push(data);
        });
    }

    function update(item) {
        item.$save();
    }

    function remove(item) {
        item.$remove(function(){
            vm.list.splice(vm.list.indexOf(item),1);
        });
    }

    function init(id){
        if(angular.isDefined(id)){
            var _id= parseInt(id);
            var item= $filter('filter')(vm.list, {id: _id})[0];
            if(angular.isDefined(item)){
                vm.currentItem=item;
            }
        }
    }

}

