describe('ChatSrv service', function () {
    // Defined out reference variable outside
    var ChatSrv;

    // Wrap the parameter in underscores
    beforeEach(function () {
        // mock the module
        module('app.chat');

        // mock the controller
        inject(function (_ChatSrv_) {
            ChatSrv = _ChatSrv_;
        });

        spyOn(ChatSrv, 'addNewMessage').and.callThrough();
        spyOn(ChatSrv, 'userLogin').and.callThrough();
    });

    it('should be clean', function () {
        expect(ChatSrv.board.length).toEqual(0);
        ChatSrv.board.push('sdf');
        expect(ChatSrv.board.length).toEqual(1);
    });

    it('should add new message', function () {
        var user = 'new user',
            message = 'new message';

        ChatSrv.addNewMessage(user, message);

        expect(ChatSrv.addNewMessage).toHaveBeenCalled();
        expect(ChatSrv.addNewMessage).toHaveBeenCalledWith(user, message);
        dump('ChatSrv.board: '+JSON.stringify(ChatSrv.board));

        expect(ChatSrv.board.length).toBeGreaterThan(0);
        expect(ChatSrv.board[0]).toEqual(
            {
                user: user,
                message: message
            });
    });

    it('should login', function () {
        var user = 'new user';

        ChatSrv.userLogin(user);

        expect(ChatSrv.userLogin).toHaveBeenCalled();
        expect(ChatSrv.userLogin).toHaveBeenCalledWith(user);
        dump('ChatSrv.users: '+JSON.stringify(ChatSrv.users));
        expect(ChatSrv.users.length).toBeGreaterThan(0);
        expect(ChatSrv.users[0]).toContain(user);
    });


});