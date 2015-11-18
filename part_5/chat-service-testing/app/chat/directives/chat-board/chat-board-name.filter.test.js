describe('chatBoardName Filter', function(){

    var $filter;

    beforeEach(function () {
        // mock the module
        module('app.chat');

        // mock the controller
        inject(function (_$filter_) {
            $filter = _$filter_;
        });
    });

    it('should return the user name', function(){
        var res= $filter('chatBoardName')('Other User', 'My Name');
        expect(res).toEqual('Other User');
    });

    it('should replace the user name with "ME"', function(){
        var res= $filter('chatBoardName')('My Name', 'My Name');
        expect(res).toEqual('Me');
    });
});
