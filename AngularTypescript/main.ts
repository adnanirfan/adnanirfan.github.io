/**
 * Created by Hasnain on 15-Jun-15.
 */

interface Shape {
    color: string;
}
interface PenStroke {
    penWidth: number;
}

interface Square1 extends Shape, PenStroke {
    sideLength: number;
}

var square1 = <Square1>{};
square1.color = "blue";
square1.sideLength = 10;
square1.penWidth = 5.0;



var add = (a: number, b: number) => {
    return a + b;
}

var add1 = (x: number, y: number) => (x + y);

var myFunction = f => { this.x = f; }//automatically creating the that-equals-this pattern


console.log(myFunction("").toString())
