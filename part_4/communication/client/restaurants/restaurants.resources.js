angular.module('app.restaurants')
    .factory('restRsc', function ($resource, Configs) {
        return $resource(
            Configs.baseUrl + "/restaurants/:_id",
            {
                _id: '@_id'
            },
            {
                'update': {
                    method: 'PUT'
                }
            });
    });
