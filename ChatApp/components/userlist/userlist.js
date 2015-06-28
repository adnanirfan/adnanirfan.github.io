/**
 * Created by Hasnain on 23-Jun-15.
 */
var tempmsg = null;

angular.module('app.userlist', ['app.login', 'firebase'])
    .controller('UserlistController', ['$rootScope','$firebaseObject', '$firebaseArray', function ($rootScope, $firebaseObject, $firebaseArray) {

        var $scope = this;

        var ref = new Firebase("https://chatapp0.firebaseio.com/messages");
//        $scope.postsRef = ref.child("messages");
        $scope.userName = globalVar.facebook.displayName;
        $scope.check = false;
        $scope.msgListArr = [];
        $scope.usersList = [];
        $scope.user = null;



        $scope.Logout = function () {
/*            refForUserList.set({
                isOnline: false,
                userName: globalVar.facebook.displayName,
                uid: globalVar.uid
            })
            */
            refForUserList.update({
                "isOnline": "false"
            });
            localstorage.clear();
            globalVar = null;
            $location.path('/')
            $location.replace();
            $location.path().replace();
        }
        $scope.send = function () {
            console.log($scope.msg);
            $scope.msgListArr.$add( $scope.msg);
            /*$scope.msgListArr.push({
                msg: $scope.msg
            });*/
            console.log("send : " + $scope.msgListArr);
            $scope.msg = '';
            $scope.check = true;
        }
        $scope.showMsgList = function (thisItem) {
            $scope.msgListArr = [];
            console.log('show msg list')
            console.log(thisItem.item.uid);
            var refForUserMsgList = new Firebase("https://chatapp0.firebaseio.com/users/" + globalVar.uid + "/messages/" + thisItem.item.uid);
            $scope.msgListArr = $firebaseArray(refForUserMsgList)


        }

        var refForUser = new Firebase("https://chatapp0.firebaseio.com/users/" + globalVar.uid);
        var refForUserNames = new Firebase("https://chatapp0.firebaseio.com/users/");

        console.log($scope.userName);

        function init() {
            $scope.usersList = $firebaseArray(refForUserNames)
            //tempmsg = $firebaseArray(refForUserMsgList)
            $scope.user = $firebaseObject(refForUser)

/*            refForUserMsgList.push({
                message0: "0"
            })*/
            console.log('Demo')
        }

        init();

        // Attach an asynchronous callback to read the data at our posts reference
        /*        postsRef.on("child_added", function (snapshot) {
         snapshot.forEach(function(data) {
         thisScope.listarr.push(data.val().toString());
         console.log("The " + data.key() + " dinosaur's score is " +  data.val());
         });
         console.log(snapshot.val());
         console.log(thisScope.listarr)
         //$rootScope.$apply();
         //forEach(snapshot.val())
         }, function (errorObject) {
         console.log("The read failed: " + errorObject.code);
         });
         */
        /*********************************************
        var count = 0;
        var userCount = 0;
        ref.on("child_added", function (snap) {
            count++;
            $scope.listarr.push(snap.val());
            console.log("added", snap.val());
        });
        refForUserList.on("value", function (snap) {
            userCount++;
            $scope.userList.push(snap.val());
            //console.log("added", snap.val());
        });
        $scope.nameArray = [];
        refForUserNames.on("child_added", function (snap) {
            var tempvar = snap.val();
            $scope.nameArray.push(tempvar.userName)
            userCount++;
            try{
                $scope.userNamesList.push(tempvar);
            }catch(err){
                console.log("refForUserNames")
            }
            //console.log("added", tempvar);
            //console.log(snap.key());
            //console.log($scope.userNamesList);
            console.log($scope.nameArray);
        });/****************************************************/
        // length will always equal count, since snap.val() will include every child_added event
        // triggered before this point
        /*ref.once("value", function (snap) {
            console.log("initial data loaded!", Object.keys(snap.val()).length === count);
        });*/
    }]);
