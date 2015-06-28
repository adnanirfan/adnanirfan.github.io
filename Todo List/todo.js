/**
 * Created by Hasnain on 23-Apr-15.
 */
var tempDes, tempDate;
angular.module('buttonsDemo1', ['ngMaterial', 'firebase'])
    .controller('AppCtrl', function ($rootScope, $scope, $mdDialog, $firebaseArray) {

        var ref = new Firebase("https://findingnemo.firebaseio.com/messages");
        /*$scope.messages = $firebaseArray(ref);

        $scope.addMessage = function() {
            $scope.messages.$add({
                text: $scope.newMessageText
            });
        };*/

        $scope.title1 = 'Button';
        $scope.title4 = 'Warn';
        $scope.isDisabled = true;
        $scope.googleUrl = 'http://google.com';
        $rootScope.date = new Date(2015, 4, 27);
        $scope.des = 987456;
        $rootScope.messages = [
            {title: "Message A", selected: false, date: $rootScope.date},
            {title: "Message B", selected: false, date: $rootScope.date},
            {title: "Message C", selected: false, date: $rootScope.date}
        ];
/*************************************************************************************************************/
        $scope.delete = function () {
            for (var i = 0; i < $rootScope.messages.length; i++) {
                if ($rootScope.messages[i].selected == true)
                    $rootScope.messages.splice(i, 1);
            }
        }
        $scope.$on('someEvent', function(event, data) {
            console.log(tempDes + ' ' + tempDate)
            $rootScope.messages.push({title: tempDes, selected: false});
        });
/*************************************************************************************************************/
        /*$scope.add = function () {
            $mdDialog.hide();
            $rootScope.messages.push({title: $rootScope.description, selected: false});
        }*/
/*************************************************************************************************************/
        $scope.showAdvanced = function ($event) {
            $mdDialog.show({
                controller: DialogController,
                templateUrl: './view/dialog1.html',
                targetEvent: $event
            })
                .then(function (answer) {
//                    console.log($rootScope.date);
                    /*function firstCtrl($scope){
                     $scope.$ o n('someEvent', function(event, data) { console.log(data); });
                     }*/
                    $scope.$emit('someEvent', [tempDes, tempDate]);
                    $scope.alert = 'You said the information was "' + answer + '".';
                }, function () {
                    /**************************************************When Escaped*********************************************/
                    $scope.alert = 'You cancelled the dialog.';
                });
        };
    });
/*************************************************************************************************************/
function DialogController($rootScope, $scope, $mdDialog) {


    $scope.hide = function () {
        $mdDialog.hide();
    };
    $scope.cancel = function () {
        $mdDialog.cancel();
    };
    $scope.answer = function (answer) {
        tempDes = $scope.description;
        tempDate = $scope.ddate;
        $mdDialog.hide(answer);
    };
}