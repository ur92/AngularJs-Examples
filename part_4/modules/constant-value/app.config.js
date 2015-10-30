angular.module('app.core', [])
    .constant('AppConstants',
        {
            APP_NAME: 'My Demo App',
            VERSION: 1.2
        }
    )
    .value('AppValues',
        {
            views: 0,
            likes: 2
        }
    );


