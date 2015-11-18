describe('Chat controller', function () {

    var $controller, ChatCtrl;

    beforeEach(function () {
        // mock the module
        module('app.chat');

        // mock the controller
        inject(function (_$controller_) {
            $controller = _$controller_;
            ChatCtrl = $controller('ChatCtrl');
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

        dump('ChatCtrl.usersList: '+JSON.stringify(ChatCtrl.usersList));

    });

    it('on message send', function () {
        ChatCtrl.message= 'my message';
        ChatCtrl.user= 'new user';
        ChatCtrl.sendMessage();

        expect(ChatCtrl.board.length).toBeGreaterThan(0);

        expect(ChatCtrl.board[0]).toEqual(
            {
                user: ChatCtrl.user,
                message: 'my message'
            });

        expect(ChatCtrl.message).toEqual('');

        dump('ChatCtrl.board: '+JSON.stringify(ChatCtrl.board));
    });

});



