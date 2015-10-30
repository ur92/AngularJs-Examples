app.controller('ChatCtrl', ChatCtrl);

function ChatCtrl($resource, mySocket) {
    var vm = this;




    /*vm.booksRsc = $resource(
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
    }*/
}
