angular.module('app.shopping-cart.service', [])
    .service('ShoppingCart', shoppingCartConstructor);

function shoppingCartConstructor() {

    var cart = [];

    var products = [
        {
            title: 'Cheese',
            price: 10
        },
        {
            title: 'Bread',
            price: 15
        },
        {
            title: 'Milk',
            price: 6
        },
        {
            title: 'Cottage',
            price: 7
        },
        {
            title: 'Dani',
            price: 4
        },
        {
            title: 'Yoplait',
            price: 6
        }
    ];

    function addToCart(product) {
        var index = cart.indexOf(product);
        if (index > -1) {
            cart[index].amount++;
        }
        else {
            product.amount = 1;
            cart.push(product);
        }
    }

    function removeFromCart(product) {
        var index = cart.indexOf(product);
        if (index > -1) {
            if(cart[index].amount>1){
                cart[index].amount--;
            }
            else{
                cart.splice(index,1);
            }
        }
    }

    function getTotal(){
        var sum=0;
        angular.forEach(cart, function(item){
            sum+= item.price*item.amount;
        });

        return sum;
    }

    this.cart = cart;
    this.products = products;
    this.addToCart = addToCart;
    this.removeFromCart = removeFromCart;
    this.getTotal= getTotal;
}