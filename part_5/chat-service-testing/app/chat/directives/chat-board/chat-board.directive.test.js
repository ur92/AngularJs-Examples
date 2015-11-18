xdescribe('chatBoard directive', function () {
    var $compile,
        $rootScope;

    beforeEach(function(){
        //module('chatApp');
    });

        // Store references to $rootScope and $compile
    // so they are available to all tests in this describe block
    beforeEach(function () {
        //module('app.chat');
        module('chatApp');
        inject(function (_$compile_, _$rootScope_) {
            // The injector unwraps the underscores (_) from around the parameter names when matching
            $compile = _$compile_;
            $rootScope = _$rootScope_;
        })
    });

    it('compile itself with the right HTML', function () {
        var scope = $rootScope.$new();
        scope.user = 'new user';
        scope.board = [{
            user: 'new user',
            message: 'mew message'
        }];

        // Compile a piece of HTML containing the directive
        var element = $compile("<chat-board user-name='sdf'/>")(scope);
        // fire all the watches, so the scope expression {{1 + 1}} will be evaluated
        scope.$digest();
    });
});