angular.module('app.chat')
    .service('ChatSrv', chatSrv);

function chatSrv() {
    var vm= this;

    vm.users = [];
    vm.board = [];

    vm.addNewMessage = addNewMessage;
    vm.userLogin = userLogin;

    function addNewMessage(_user, _message) {
        vm.board.push({
            user: _user,
            message: _message
        });
    }

    function userLogin(_user) {
        vm.users.push(_user);
    }
}