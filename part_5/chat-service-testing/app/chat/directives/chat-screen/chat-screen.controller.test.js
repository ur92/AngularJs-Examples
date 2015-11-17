describe('Chat controller', function () {

    var $controller, $rootScope, ChatSrv, ChatCtrl;

    beforeEach(function () {
        // mock the module
        module('app.chat');

        // mock the controller
        inject(function (_$controller_, _$rootScope_, _ChatSrv_) {
            $controller = _$controller_;
            $rootScope = _$rootScope_;
            ChatSrv = _ChatSrv_;
            ChatCtrl = $controller('ChatCtrl', {ChatSrv: ChatSrv});
        });
    });

    it('should be injected', function () {
        expect(ChatCtrl).toBeDefined();
        expect(ChatCtrl).not.toBeNull();
    });

    it('should be clean', function () {
        expect(ChatCtrl.user).toEqual('');
        expect(ChatCtrl.message).toEqual('');
        expect(ChatCtrl.isMessageEmpty).toBeTruthy();
    });

    it('on user login', function () {
        ChatCtrl.login('newUser');

        expect(ChatCtrl.user).toEqual('newUser');
        expect(ChatCtrl.usersList).toContain('newUser');

        dump(ChatCtrl.usersList);
    });

    it('on message send', function () {
        ChatCtrl.message= 'my message';
        ChatCtrl.sendMessage();

        expect(ChatCtrl.board[0]).toEqual(
            {
                user: ChatCtrl.user,
                message: 'my message'
            });
        expect(ChatCtrl.message).toEqual('');

        dump(ChatCtrl.board);
    });



});



