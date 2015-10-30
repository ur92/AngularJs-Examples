/**
 * Created by UR92 on 13/10/2015.
 */
app.directive('create', function(){
    return {
        templateUrl: "create.html",
        scope:{
            model: '=',
            createFn: '='
        },
        link: function(scope){


        }

    }
})

.directive('list', function($state){
    return {
        templateUrl: "list.html",
        scope:{
            model: '=',
            modelName: '@'
        },
        link: function(scope){
            scope.edit= function(item){
                $state.go(scope.modelName+'.edit');
            }

        }
    }
})

