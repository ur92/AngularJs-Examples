/**
 * Created by UR92 on 13/10/2015.
 */

app.directive('myitem', function(){
    return {
        template: "<div ng-include='tempUrl'></div>",
        scope:{
            item: '=',
            deleteFn: '='
        },
        link: function(scope){

            scope.tempUrl='directives/info.html';

            scope.goTo= function(screen){
                scope.tempUrl='directives/'+screen+'.html';
            };

            scope.getType= function(field){
                return typeof field;
            };

            scope.delete= function(item){
                console.log('Directive: delete friend!');
                scope.deleteFn(item);
            }
        }

    }
});