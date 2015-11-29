angular.module('app.login.directive',[])
    .directive('login', function(AppConstants, AuthService){
       return {
           restrict: 'EA',
           templateUrl: 'directives/login.html',
           link: function(scope){

               scope.loginForm= {
                   email: 'ur92.ed@gmail.com',
                   error: false
               };
               scope.loggedIn= false;

               scope.login= function(){
                   if(scope.loginForm.password=== AuthService && scope.loginForm.email=='ur92.ed@gmail.com'){
                       scope.loginForm.error=false;
                       scope.loggedIn=true;
                   }
                   else{
                       scope.loginForm.error=true;
                   }
               }

           }
       }
    });