/**
 * Created by Hasnain on 09-Jun-15.
 */
angular
    .module('Dua', ['ngMaterial'])
    .controller('MainController', function($scope){

    })
    /*.controller('AppCtrl2', function ($scope, $timeout, $mdSidenav, $mdUtil, $log) {
        $scope.toggleLeft = buildToggler('left');
        $scope.toggleRight = buildToggler('right');
        $scope.toppings = ['New Dua',
            'All Public Du',
            'Login',
            'Administrator'];
        /**
         * Build handler to open/close a SideNav; when animation finishes
         * report completion in console
         */
/*
        function buildToggler(navID) {
            var debounceFn =  $mdUtil.debounce(function(){
                $mdSidenav(navID)
                    .toggle()
                    .then(function () {
                        $log.debug("toggle " + navID + " is done");
                    });
            },300);
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
    });*/