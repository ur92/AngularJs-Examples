/**
 * Created by UR92 on 13/10/2015.
 */

app.directive('myitem', function ($log) {
    return {
        template: "<div ng-include='tempUrl' ng-if='showElement()'></div>",
        scope: {
            item: '=',
            deleteFn: '=',
            createFn: '=',
            cancelFn: '=',
            createModel: '=',
            index: '@'
        },
        link: myItem
    };

    function myItem(scope) {
        // PROPERTIES
        scope.tempUrl = 'directives/info.html';

        // METHODS
        scope.getType = getType;
        scope.goTo = goTo;
        scope.showElement = showElement;

        scope.$watch('createModel', watch_createModel);

        function goTo(screen) {
            scope.tempUrl = 'directives/' + screen + '.html';
        }

        function getType(field) {
            return typeof field;
        }

        function watch_createModel() {
            if (scope.createModel != null)
                scope.goTo('create');
            else {
                scope.goTo('info');
            }
        }

        function showElement() {
            return (scope.index == 0 || scope.createModel == null);
        }
    }
});