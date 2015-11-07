angular.module('app.simple-http')
    .controller('SimpleHttpCtrl', function ($http, Configs) {
        var vm = this;

        vm.item = {};
        vm.items = [];

        vm.url = Configs.baseUrl + "/restaurants/5635bee61914a1caf87730c0";
        vm.restIndex= 1;

        vm.getItem = function () {
            // http GET
            $http({
                method: 'GET',
                url: vm.url
            }).then(
                function (res) {
                    vm.item = res.data;
                    console.log(res);
                },
                function (res) {
                    console.log(res);
                }
            );


            // http GET shortcut
            /*$http.get(vm.url).then(
                function (res) {
                    vm.item = res.data;
                    console.log(res);
                },
                function (res) {
                    console.log(res);
                }
            );*/
        };

        vm.getItems= function(){
            // http GET with params and headers
            $http({
                method: 'GET',
                url: Configs.baseUrl + "/restaurants",
                params: {
                    sort: 'name',
                    limit: 50
                },
                headers: {
                    Auth: 'sdfsdfsdfsdfsdf'
                }

            }).then(
                function (res) {
                    vm.items = res.data;
                    console.log(res);
                },
                function (res) {
                    console.log(res);
                }
            );
        };

        vm.updateItem = function () {
            // http POST
            $http({
                method: 'POST',
                url: vm.url,
                data: {
                    name: '112 My New Restaurant No. '+ vm.restIndex
                }
            }).then(
                function (res) {
                    vm.item = res.data;
                    vm.restIndex++;
                    console.log(res);
                },
                function (res) {
                    console.log(res);
                }
            );


            // http POST shortcut
            /*$http.post(vm.url, {
                name: '112 My New Restaurant No. '+ vm.restIndex
            }).then(
                function (res) {
                    vm.item = res.data;
                    vm.restIndex++;
                    console.log(res);
                },
                function (res) {
                    console.log(res);
                }
            );*/
        }
    });
