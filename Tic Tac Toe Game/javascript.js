
var user =0;
var i1 = document.getElementById("i1");
var i2 = document.getElementById("i2");
var i3 = document.getElementById("i3");
var i4 = document.getElementById("i4");
var i5 = document.getElementById("i5");
var i6 = document.getElementById("i6");
var i7 = document.getElementById("i7");
var i8 = document.getElementById("i8");
var i9 = document.getElementById("i9");



function clicked(ob){
    if(ob.innerHTML==0 || ob.innerHTML==1) {

        console.log("Already Acquired")

    }else{
        ob.innerHTML = user;
        check(ob);
        if (user == 0) {
            user = 1
        }
        else if (user == 1) {
            user = 0
        }

        console.log(ob);

    }
}

function check(obj){
    if(i1.innerHTML==i2.innerHTML && i2.innerHTML==i3.innerHTML && i3.innerHTML==i1.innerHTML){
        alert("Player " + user + " Wins  1");
    }else if(i1.innerHTML==i5.innerHTML && i5.innerHTML==i9.innerHTML && i9.innerHTML==i1.innerHTML && i1.innerHTML!="-"){
        alert("Player " + user + " Wins  2");
    }else if(i1.innerHTML==i4.innerHTML && i4.innerHTML==i7.innerHTML && i7.innerHTML==i1.innerHTML && i1.innerHTML!="-"){
        alert("Player " + user + " Wins  3");
    }

    else if(i2.innerHTML==i5.innerHTML && i5.innerHTML==i8.innerHTML && i8.innerHTML==i2.innerHTML && i2.innerHTML!="-"){
        alert("Player " + user + " Wins  4");
    }
    else if(i3.innerHTML==i6.innerHTML && i6.innerHTML==i9.innerHTML && i9.innerHTML==i3.innerHTML && i3.innerHTML!="-"){
        alert("Player " + user + " Wins  4");
    }

    else if(i4.innerHTML==i5.innerHTML && i5.innerHTML==i6.innerHTML && i6.innerHTML==i4.innerHTML && i4.innerHTML!="-"){
        alert("Player " + user + " Wins  5");
    }
    else if(i7.innerHTML==i8.innerHTML && i8.innerHTML==i9.innerHTML && i9.innerHTML==i7.innerHTML && i4.innerHTML!="-"){
        alert("Player " + user + " Wins  5");
    }
}

