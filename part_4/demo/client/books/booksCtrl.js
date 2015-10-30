app.controller('BooksCtrl', BooksCtrl);
app.config(config);

function BooksCtrl($resource) {
    var vm = this;

    vm.booksRsc = $resource(
        "http://localhost:3000/api/v1/books/:book_id",
        {
            book_id: '@_id'
        },
        {
            'update': {
                method: 'PUT'
            }
        });

    vm.list = vm.booksRsc.query();

    vm.add = add;
    vm.update = update;
    vm.delete = remove;

    function add(item) {
        new vm.booksRsc({title: item}).$save(function (data) {
            vm.list.push(data);
        });
    }

    function update(item) {
        item.$save();
    }

    function remove(item) {
        item.$remove(function(){
            vm.list.splice(vm.list.indexOf(item),1);
        });
    }
}


function config($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/books');

    $stateProvider
        .state('Books', {
            templateUrl: 'books/books.html',
            url: '/books',
            controllerAs: 'BooksCtrl as books',
            abstract: true
        })
        .state('Books.detail', {
            template: '<crud-detail model=""/>',
            url: '/books/detail/:id'
        })
        .state('Books.edit', {
            template: '<crud-edit model=""/>',
            url: '/books/edit/:id'
        })
        .state('Books.delete', {
            template: '<crud-delete model=""/>',
            url: '/books/delete/:id'
        })
}
