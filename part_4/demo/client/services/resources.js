angular.module('demo')
    .factory('restaurantsRsc', function ($resource, appConstants) {
        return $resource(
            appConstants.baseUrl + "/books/:_id",
            {
                _id: '@_id'
            },
            {
                'update': {
                    method: 'PUT'
                }
            });
    });
