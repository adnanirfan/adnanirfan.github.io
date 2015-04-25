/**
 * Created by Hasnain on 23-Apr-15.
 */
angular.module('buttonsDemo1', ['ngMaterial'])
    .controller('AppCtrl', function ($scope, $mdDialog) {
        $scope.title1 = 'Button';
        $scope.title4 = 'Warn';
        $scope.isDisabled = true;
        $scope.googleUrl = 'http://google.com';
        $scope.description = 'Write';
        $scope.messages = [
            {title: "Message A", selected: false},
            {title: "Message B", selected: true},
            {title: "Message C", selected: true}
        ];

        $scope.delete = function () {
            for (var i = 0; i < $scope.messages.length; i++) {
                if ($scope.messages[i].selected == true)
                    $scope.messages.splice(i, 1);
            }
        }

        $scope.showAdvanced = function ($event) {
            $mdDialog.show({
                controller: DialogController,
                templateUrl: './view/dialog1.html',
                targetEvent: $event
            })
                .then(function (answer) {
                    $scope.messages.push({title: $scope.description, selected: false});
                    $scope.alert = 'You said the information was "' + answer + '".';
                }, function () {
                    $scope.alert = 'You cancelled the dialog.';
                });
        };
        $scope.add = function () {
            $mdDialog.hide();
            $scope.messages.push({title: $scope.description, selected: false});
        }
    });

function DialogController($scope, $mdDialog) {
    $scope.hide = function () {
        $mdDialog.hide();
    };
    $scope.cancel = function () {
        $mdDialog.cancel();
    };
    $scope.answer = function (answer) {
        $mdDialog.hide(answer);
    };
}