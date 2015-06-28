/**
 * Created by Hasnain on 23-Jun-15.
 */


// Include app dependency on ngMaterial
var globalVar = null;
var app = angular.module('chat', ['app.login', 'app.userlist', 'ngMaterial', 'ngNewRouter'])
    .config(function ($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('red')
            .accentPalette('orange');
    })
    .controller('mainController', function ($scope, $router) {
        $router.config([
            {path: "/", redirectTo: "/login"},
            {path: "/login", component: "login"},
            {path: "/signup", component: "signup"},
            {path: "/userlist", component: "userlist"}
        ])


    })
    .factory('userService', function () {
        var thisScope = this;
        this.userData = {yearSetCount: 0};
        thisScope.ref = new Firebase("https://chatapp0.firebaseio.com");
        this.getUserData = function () {
            return this.userData;
        };
        this.login = function () {

            thisScope.ref.authWithOAuthPopup("facebook", function (error, authData) {
                if (error) {
                    console.log("Login Failed!", error);
                } else {
                    this.userData = authData;
                    //Location
                    console.log($location.path());
                    $location.path('/userlist')
                    $location.replace();
                    console.log($location.path());
                    console.log($location.absUrl())
                    $location.path().replace();
                    $rootScope.$apply();
                    console.log("Authenticated successfully with payload:", authData);
                }
            });
            console.log("Facebook");
        };
        this.setEmail = function (email) {
            this.userData.email = email;
        };

        this.getEmail = function () {
            return this.userData.email;
        };
    })

    /*.controller("YourController", function ($scope) {
        //var ref = new Firebase("https://chatapp0.firebaseio.com");
        /*var usersRef = ref.child("users");
         usersRef.push({
         alanisawesome: {
         date_of_birth: "June 23, 1912",
         full_name: "Alan Turing"
         },
         gracehop: {
         date_of_birth: "December 9, 1906",
         full_name: "Grace Hopper"
         }
         });
    });*/