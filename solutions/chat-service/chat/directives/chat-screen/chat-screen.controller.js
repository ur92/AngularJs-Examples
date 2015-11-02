angular.module('app.chat')
    .controller('ChatCtrl', chatCtrl);

function chatCtrl(ChatSrv) {
    var vm = this;

    vm.user = '';
    vm.message='';
    vm.board = ChatSrv.board;
    vm.usersList= ChatSrv.users;

    vm.login = function (_userName) {
        ChatSrv.userLogin(_userName);
        vm.user = _userName;
    };

    vm.sendMessage = function () {
        ChatSrv.addNewMessage(vm.user, vm.message);
        vm.message = '';
    };

    vm.isMessageEmpty= function(){
        return vm.message.trim()==='';
    };

}



