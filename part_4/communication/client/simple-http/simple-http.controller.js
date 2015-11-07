angular.module('app.simple-http')
    .controller('SimpleHttpCtrl', function ($http, Configs) {
        var vm = this;

        vm.item = {};
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
                },
                function (res) {
                    console.log('error: ' + res.status);
                }
            );

            // http GET shortcut
            /*$http.get(vm.url).then(
                function (res) {
                    vm.item = res.data;
                },
                function (res) {
                    console.log('error: ' + res.status);
                }
            );*/
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
                },
                function (res) {
                    console.log('error: ' + res.status);
                }
            );

            // http GET shortcut
            /*$http.post(vm.url, {
                name: '112 My New Restaurant No. '+ vm.restIndex
            }).then(
                function (res) {
                    vm.item = res.data;
                    vm.restIndex++;
                },
                function (res) {
                    console.log('error: ' + res.status);
                }
            );*/
        }
    });
