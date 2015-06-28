/**
 * Created by Hasnain on 25-Jun-15.
 */
angular.module('app.servicemodule', ['ngNewRouter'])
    .factory('userService', function () {
        var thisScope = this;
        this.userData = null;
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
        /*
        this.setEmail = function (email) {
            this.userData.email = email;
        };

        this.getEmail = function () {
            return this.userData.email;
        };*/
    });