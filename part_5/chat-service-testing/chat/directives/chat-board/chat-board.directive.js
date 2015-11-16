angular.module('app.chat')
    .directive('chatBoard', function () {
        return {
            templateUrl: 'chat/directives/chat-board/chat-board.html',
            scope: {
                board: '=',
                userName: '='
            },
            link: function (scope) {

                scope.getRowClass = function (_messageItem) {
                    var itemClass = 'list-group-item-';
                    return (_messageItem.user === scope.userName) ? itemClass + 'success' : itemClass + 'info';
                };
            }
        }

    });