angular.module('demo')
    .factory('restRsc', function ($resource, appConstants) {
        return $resource(
            appConstants.baseUrl + "/restaurants/:_id",
            {
                _id: '@_id',
                //limit: 5000

            },
            {
                'update': {
                    method: 'PUT'
                }
            });
    });
