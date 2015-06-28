/**
 * Created by Hasnain on 11-Jun-15.
 */
angular.module('dua.home', [])
    .controller("HomeController", function () {
        var thisScope = this;
        this.name = 'Adnan in home';
        this.arr = [1, 2, 3, 4, 5];

        //var refAll = new Firebase("https://adnanirfan.firebaseio.com/duaapp/dua/public")
        //
        //this.list = $firebaseArray(refAll);
        this.addval = function () {
            console.log("sssssssssssss");
            thisScope.list.$add({
                Content: "Simple Content 1",
                Counter: 0,
                RequestedOn: "1"/*new Date().toDateString*/,
                RequestedBy: "Adnan"
            });
        }

    })
    .factory("myService", function () {
        var refAll = new Firebase("https://adnanirfan.firebaseio.com/duaapp/dua/public")

        this.list = $firebaseArray(refAll);
    })