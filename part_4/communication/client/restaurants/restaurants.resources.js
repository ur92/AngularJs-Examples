angular.module('app.restaurants')
    .factory('restRsc', function ($resource, Configs) {
        return $resource(
            Configs.baseUrl + "/restaurants/:id",
            {
                id: '@_id',
                sort: 'name',
                limit: 5000
            },
            {
                'update': {
                    method: 'PUT'
                }
            });
    });
