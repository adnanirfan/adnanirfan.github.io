/**
 * Created by Hasnain on 23-Apr-15.
 */
var tempDes;
angular.module('buttonsDemo1', ['ngMaterial'])
    .controller('AppCtrl', function ($rootScope, $scope, $mdDialog) {
        $scope.title1 = 'Button';
        $scope.title4 = 'Warn';
        $scope.isDisabled = true;
        $scope.googleUrl = 'http://google.com';
        $rootScope.date;
        $scope.description = 987456;
        $rootScope.messages = [
            {title: "Message A", selected: false, date: ''},
            {title: "Message B", selected: false, date: ''},
            {title: "Message C", selected: false, date: ''}
        ];
/*************************************************************************************************************/
        $scope.delete = function () {
            for (var i = 0; i < $rootScope.messages.length; i++) {
                if ($rootScope.messages[i].selected == true)
                    $rootScope.messages.splice(i, 1);
            }
        }
        $scope.$on('someEvent', function(event, data) {
            console.log(data);
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


                    $scope.$emit('someEvent', $scope.description);

                    console.log(typeof(tempDes + '  ' + 123564978));
                    $rootScope.messages.push({title: 123, selected: false});
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
        tempDes = $rootScope.description;
        $mdDialog.hide(answer);
    };
}