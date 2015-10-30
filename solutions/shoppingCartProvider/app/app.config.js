angular.module('app.core', [])
    .constant('AppConstants',
        {
            APP_NAME: 'My eBay',
            VERSION: 1.2
        }
    )
    .config(function(ShoppingCartProvider){
        ShoppingCartProvider.setMaxProductsAmount(5);
    });


