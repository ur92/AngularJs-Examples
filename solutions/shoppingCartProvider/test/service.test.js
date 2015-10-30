describe('ShoppingCart service', function() {
    // Defined out reference variable outside
    var ShoppingCart;

    // Wrap the parameter in underscores
    beforeEach(function () {
        module('demoApp');
        module('app.shopping-cart.service');

        inject(function (_ShoppingCart_) {
            ShoppingCart = _ShoppingCart_;
        })

    });

    it('should count the products', function () {
        expect(ShoppingCart.products.length).toEqual(6);
    });

    it('should add one product to the cart', function(){
        var p=  ShoppingCart.products[0];
        ShoppingCart.addToCart(p);

        expect(ShoppingCart.cart.length).toEqual(1);
        expect(ShoppingCart.cart[0].amount).toEqual(1);
    });

    it('should add another product to the cart', function(){
        var p=  ShoppingCart.products[0];
        ShoppingCart.addToCart(p);
        ShoppingCart.addToCart(p);

        expect(ShoppingCart.cart.length).toEqual(1);
        expect(ShoppingCart.cart[0].amount).toEqual(2);
    });

    it('should remove one of two products from product to the cart', function(){
        var p=  ShoppingCart.products[0];
        ShoppingCart.addToCart(p);
        ShoppingCart.addToCart(p);

        expect(ShoppingCart.cart.length).toEqual(1);
        expect(ShoppingCart.cart[0].amount).toEqual(2);
    });

});