/**
 * Created by Hasnain on 15-Jun-15.
 */
var _this = this;
var square1 = {};
square1.color = "blue";
square1.sideLength = 10;
square1.penWidth = 5.0;
var add = function (a, b) {
    return a + b;
};
var add1 = function (x, y) { return (x + y); };
var myFunction = function (f) {
    _this.x = f;
}; //automatically creating the that-equals-this pattern
console.log(myFunction("").toString());
//# sourceMappingURL=main.js.map