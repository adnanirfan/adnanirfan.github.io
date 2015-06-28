/**
 * Created by Adnan on 04-Jun-15.
 */


var LoggedInUser = null;
// Include app dependency on ngMaterial
var app = angular.module('YourApp', ['ngMaterial', 'ngAnimate', 'firebase', 'ngMdIcons'])
    .controller("LoginController", function ($scope, $rootScope, $mdDialog, mySharedService, $firebaseArray) {
        $scope.reffire = null;
        $scope.user = null;
        $scope.displayName = "";
        $scope.addcheck = false;
        $scope.checked = true;
        $scope.check = false;
        $rootScope.searchTodo;
        $rootScope.List = null;
        /************It Disables All The Contents/Inputs************/

        $scope.checkAddCheck = function () {
            if ($scope.addcheck) {
                $scope.addcheck = false;
            } else {
                $scope.addcheck = true;
            }
        }
        $scope.showAdvanced = function ($event) {
            $mdDialog.show({
                controller: DialogController,
                clickOutsideToClose: false,
                templateUrl: './view/dialog1.html',
                targetEvent: $event
            })
                .then(function (answer) {
                    try {
                        $scope.user = answer;
                        LoggedInUser = answer;
                        //$scope.$emit('boradcastLoginDetail', answer.token);
                        $scope.afterAuth();
                        //$scope.$broadcast("InitializeRefVariables", answer);
                        //$scope.check = false;
                    } catch (err) {
                        alert("Error then: " + err);
                    }
                }, function () {
                    /************************When Escaped************************/
                    $scope.alert = 'You cancelled the dialog.';
                });
        };

        $scope.$on('boradcastLoginDetail', function (event, authData) {
            //console.log("boradcastLoginDetail " + authData)
        });
        $scope.loginWithGoogle = function () {
            var ref = new Firebase("https://findingnemo.firebaseio.com");
            console.log("GooGle Function");
            ref.authWithOAuthPopup("google", function (error, authData) {
                if (error) {
                    console.log("Login Failed!", error);
                } else {
                    $rootScope.aut = authData;
//                                mySharedService.prepForBroadcast(false);
//                                $("#login").hide();
//                                $("#details").show();
                    console.log("Authenticated successfully with payload:", authData);
                }
            });
        }
        $scope.loginWithFacebook = function () {
            var ref = new Firebase("https://findingnemo.firebaseio.com");
            console.log("FaceBook Function");
            ref.authWithOAuthPopup("facebook", function (error, authData) {
                if (error) {
                    console.log("Login Failed!", error);
                } else {
                    $rootScope.aut = authData;
                    mySharedService.prepForBroadcast(false);
                    console.log("Authenticated successfully with payload:", authData);
                }
            });
        };
        $rootScope.$on('handleBroadcast', function () {
            $scope.checked = mySharedService.checked;
            //console.log("LoginCntrl on handlebrodcast" + $scope.checked);
        });

        $scope.afterAuth = function () {

            $rootScope.reffire = new Firebase("https://adnanirfan.firebaseio.com/users/" + LoggedInUser.uid);
            //console.log("afterAuth: " + $rootScope.reffire);
            $rootScope.List = $firebaseArray($rootScope.reffire);

            try {
                var tempRef = new Firebase("https://adnanirfan.firebaseio.com/userNames/testing");
                var temparr = $firebaseArray(tempRef);
                var tempDate = new Date().toLocaleString();
                /*
                 // this new, empty ref only exists locally
                 var newChildRef = tempRef.push();
                 // we can get its id using key()
                 console.log('my new shiny id is ' + newChildRef.key());
                 // now it is appended at the end of data at the server
                 newChildRef.set({foo: 'bar'});
                 */

            } catch (error) {
                alert("Error in afterAuth: " + error)
            }
            var mySet = setInterval(function () {
                if ($rootScope.List != null) {
                    window.clearInterval(mySet);
                } else {
                    console.log("Waiting for List")
                }
            }, 1000);
            try {

                if ($scope.user.provider == "google") {
                    $scope.displayName = LoggedInUser.google.displayName;
                    temparr.$add({
                        name: LoggedInUser.google.displayName,
                        provider: LoggedInUser.provider,
                        date: " " + tempDate
                    });
                } else if ($scope.user.provider == "facebook") {
                    $scope.displayName = $scope.user.facebook.displayName;
                    temparr.$add({
                        name: $scope.user.facebook.displayName,
                        provider: LoggedInUser.provider,
                        date: " " + tempDate
                    });


                }
            } catch (err) {
                alert("Error in naming: " + err);
            }

        }
        $scope.logout = function () {
            window.location.reload();
        }

    })
    .controller("RemoveController", function ($scope, $rootScope, $firebaseArray) {
        var refRemove = null;
        $scope.listInRemCtrl = null;

        $scope.initrefRemove = function () {
            refRemove = new Firebase("https://adnanirfan.firebaseio.com/users/" + LoggedInUser.uid);
            $scope.listInRemCtrl = $firebaseArray($rootScope.reffire);
            $scope.listInRemCtrl.$add("$scope.listInRemCtrl")
            console.log("listInRemCtrl: " + $rootScope.List);
        }
        // create a synchronized array
        //**********************make its $emit
        $scope.$on("InitializeRefVariables", function (obj) {
            //$scope.initrefRemove();
        });
        $scope.removeTask = function (taskIndex) {
            $rootScope.List.$remove(taskIndex);
            //$scope.listInRemCtrl.$remove(taskIndex);
        };

    })
    .controller("AddController", function ($scope, $rootScope, $firebaseArray) {
        var ref = null;
        $scope.listInAddCtrl = null;
        // create a synchronized array

        //$scope.list = $firebaseArray(ref);
        $scope.initrefAdd = function () {
            ref = new Firebase("https://adnanirfan.firebaseio.com/users/" + LoggedInUser.uid);
            $scope.listInAddCtrl = $firebaseArray($rootScope.reffire);
            $scope.listInAddCtrl.$add("$scope.list")
            console.log("listInAddCtrl: " + $rootScope.List);
        }
        $scope.addTask = function () {

            $rootScope.List.$add($scope.task);
            //$scope.listInAddCtrl.$add($scope.task);
            $scope.task = "";
        }
        $scope.$on("InitializeRefVariables", function (obj) {
            //$scope.initrefAdd();
        });
    })

    .controller("ManagerController", function ($scope, $rootScope, mySharedService) {
        $scope.checked = true;
        $scope.$on('handleBroadcast', function () {
            $scope.checked = mySharedService.checked;
            //console.log($scope.checked)
        });
        $scope.clicked = function () {
//                        $("#details").hide();
//                        $("#login").show();
//                        mySharedService.prepForBroadcast(true);
        }
        //console.log($scope.checked);
    })
    .factory("mySharedService", function ($rootScope) {
        var sharedService = {};
        sharedService.checked;
        sharedService.user;
        sharedService.prepForBroadcast = function (value) {
            this.checked = value;
            //console.log("prepForBroadcast" + this.checked);
            this.broadcastItem();
        };
        sharedService.broadcastItem = function () {
            //console.log("broadcastItem" + this.checked)
            $rootScope.$broadcast('handleBroadcast');
        };

        return sharedService;
    })
    .filter('capitalize', function () {
        return function (input, all) {
            return (!!input) ? input.replace(/([^\W_]+[^\s-]*) */g, function (txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            }) : '';
        }
    });

function DialogController($rootScope, $scope, $mdDialog, mySharedService) {
    $scope.hide = function () {
        $mdDialog.hide();
    };
    $scope.cancel = function () {
        $mdDialog.cancel();
    };
    $scope.answer = function (answer) {
        var auth = null;
        if (answer == "google") {
            var ref = new Firebase("https://adnanirfan.firebaseio.com");
            console.log("GooGle Function");
            ref.authWithOAuthPopup("google", function (error, authData) {
                if (error) {
                    console.log("Login Failed!", error);
                } else {
                    $rootScope.aut = authData;
                    auth = authData;
                    console.log("Authenticated successfully with payload: " + authData);
                    //                            $scope.$emit("boradcastLoginDetail", authData)
                }
            });

        } else if (answer == "facebook") {
            var ref = new Firebase("https://adnanirfan.firebaseio.com");
            console.log("FaceBook Function");
            ref.authWithOAuthPopup("facebook", function (error, authData) {
                if (error) {
                    console.log("Login Failed!", error);
                } else {
                    $rootScope.aut = authData;
                    auth = authData;
                    console.log("Authenticated successfully with payload: " + authData.facebook.displayName);
                    //                            $scope.$emit("boradcastLoginDetail", authData)
                }
            });
        }
        //                tempDes = $scope.description;
        //                tempDate = $scope.ddate;
        //                $mdDialog.hide(12346);
        var myVar = setInterval(function () {
            if (auth != null) {
                mySharedService.user = auth;
                $mdDialog.hide(auth);
                window.clearInterval(myVar);
            } else {
                console.log("Waiting for auth")
            }
        }, 1000);
    };
}

