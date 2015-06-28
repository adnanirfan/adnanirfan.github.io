/**
 * Created by Hasnain on 09-Jun-15.
 */

var refAll = new Firebase("https://adnanirfan.firebaseio.com/duaapp/dua/public")
var app = angular
    .module('dua', ['ngMaterial', 'ngAnimate', 'dua.new', 'dua.home', 'ngNewRouter'])


    .controller('AppCtrl', function ($scope, $timeout, $mdSidenav, $mdUtil, $log, $router) {
        $router.config([
            {path: "/", redirectTo: "/new"},
            {path: "/new", component: "new"},
            {path: "/home", component: "home"}
        ])

        $scope.toggleLeft = buildToggler('left');
        $scope.toggleRight = buildToggler('right');

        /*this.addval = function () {
            this.list = $firebaseArray(refAll);
            console.log("sssssssssssss");
            thisScope.list.$add({
                Content: "Simple Content 1",
                Counter: 0,
                RequestedOn: new Date().toDateString,
                RequestedBy: "Adnan"
            });
        }*/
        /**
         * Build handler to open/close a SideNav; when animation finishes
         * report completion in console
         */
        function buildToggler(navID) {
            var debounceFn = $mdUtil.debounce(function () {
                $mdSidenav(navID)
                    .toggle()
                    .then(function () {
                        $log.debug("toggle " + navID + " is done");
                    });
            }, 300);
            return debounceFn;
        }
    })
    .controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log) {
        $scope.close = function () {
            $mdSidenav('left').close()
                .then(function () {
                    $log.debug("close LEFT is done");
                });
        };
    })
    .controller('RightCtrl', function ($scope, $timeout, $mdSidenav, $log) {
        $scope.close = function () {
            $mdSidenav('right').close()
                .then(function () {
                    $log.debug("close RIGHT is done");
                });
        };
    });