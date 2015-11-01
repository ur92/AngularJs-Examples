angular.module('app.chat')
    .controller('ChatCtrl', chatCtrl);

function chatCtrl(ChatSrv) {
    var vm = this;

    vm.user = '';

    vm.board = ChatSrv.board;

    vm.login = function (_userName) {
        ChatSrv.userLogin(_userName);
        vm.user = _userName;
    };

    vm.sendMessage = function () {
        ChatSrv.addNewMessage(vm.user, vm.message);
        vm.message = '';
    };


}



