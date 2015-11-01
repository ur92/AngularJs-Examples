angular.module('app.chat')
    .directive('chatBoard', function () {
        return {
            templateUrl: 'chat/directives/chat-board/chat-board.html',
            scope: {
                board: '=',
                userName: '='
            },
            link: function (scope) {
                function isMe(_user) {
                    return (_user === scope.userName)
                }

                scope.getUserName = function (_messageItem) {
                    return isMe(_messageItem.user) ? 'Me' : _messageItem.user;
                };

                scope.getRowClass = function (_messageItem) {
                    var itemClass = 'list-group-item-';
                    return isMe(_messageItem.user) ? itemClass + 'success' : itemClass + 'info';
                };
            }
        }


    });