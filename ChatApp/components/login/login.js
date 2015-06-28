/**
 * Created by Hasnain on 23-Jun-15.
 */
angular.module('app.login', ['app.servicemodule', 'ngNewRouter'])
    .controller('LoginController', ['$rootScope', '$location', function ($rootScope, $location) {
        var thisScope = this;
        this.name = 'Friend';
        this.facebookLogin = function () {
            //userService.login();
            try {
                if (localStorage.getItem("auth") === null) {
                    thisScope.ref = new Firebase("https://chatapp0.firebaseio.com");

                    thisScope.ref.authWithOAuthPopup("facebook", function (error, authData) {
                        if (error) {
                            console.log("Login Failed!", error);
                        } else {
                            globalVar = authData;
                            //Location
                            console.log($location.path());
                            $location.path('/userlist')
                            $location.replace();
                            console.log($location.path());
                            console.log($location.absUrl())
                            $location.path().replace();
                            $rootScope.$apply();

                            //localStorage.setItem('car',JSON.stringify(car));
                            localStorage.setItem("auth", JSON.stringify(authData))
                            console.log("Authenticated successfully with payload:", authData);
                        }
                    });
                } else {
                    //car = localStorage.getItem('car');
                    //car = JSON.parse(car);

                    globalVar = localStorage.getItem("auth");
                    globalVar = JSON.parse(globalVar);

                    $location.path('/userlist')
                    $location.replace();
                    $location.path().replace();
                    //$rootScope.$apply();
                    console.log("get from else")
                    console.log(globalVar)

                }
            }catch(err){
                alert("Error in Login Function");
            }
            //console.log("Facebook");
        };
    }
])
