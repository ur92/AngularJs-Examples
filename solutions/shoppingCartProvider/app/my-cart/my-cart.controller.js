angular.module('app.my-cart.controller',[])
    .controller('MyCartCtrl', function (ShoppingCart) {
        var vm= this;

        vm.shoppingCart= ShoppingCart;
        

    });