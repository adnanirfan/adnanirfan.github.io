
var user = 0;
var user1;
var user2;
var i1 = document.getElementById("i1");
var i2 = document.getElementById("i2");
var i3 = document.getElementById("i3");
var i4 = document.getElementById("i4");
var i5 = document.getElementById("i5");
var i6 = document.getElementById("i6");
var i7 = document.getElementById("i7");
var i8 = document.getElementById("i8");
var i9 = document.getElementById("i9");

function submitInfo(form){
    user1 = document.getElementById("player1").value;
    user2 = document.getElementById("player2").value;
    console.log(form + " " +user1 + " " + user2)

//    document.getElementById('#box').className = '';
//    $('#form-container').fadeOut('slow');
//    $("#box1").fadeIn("slow");
//    $("form").toggle();

    event.preventDefault();
//    animate();
}

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
//****************************************************************************
function check(obj){
    if(i1.innerHTML==i2.innerHTML && i2.innerHTML==i3.innerHTML && i3.innerHTML==i1.innerHTML && i1.innerHTML!="-"){
        alert("Player " + (user + 1) + " Wins");
    }else if(i1.innerHTML==i5.innerHTML && i5.innerHTML==i9.innerHTML && i9.innerHTML==i1.innerHTML && i1.innerHTML!="-"){
        alert("Player " + (user + 1) + " Wins");
    }else if(i1.innerHTML==i4.innerHTML && i4.innerHTML==i7.innerHTML && i7.innerHTML==i1.innerHTML && i1.innerHTML!="-"){
        alert("Player " + (user + 1) + " Wins");
    }

    else if(i2.innerHTML==i5.innerHTML && i5.innerHTML==i8.innerHTML && i8.innerHTML==i2.innerHTML && i2.innerHTML!="-"){
        alert("Player " + (user + 1) + " Wins");
    }
    else if(i3.innerHTML==i6.innerHTML && i6.innerHTML==i9.innerHTML && i9.innerHTML==i3.innerHTML && i3.innerHTML!="-"){
        alert("Player " + (user + 1) + " Wins");
    }

    else if(i4.innerHTML==i5.innerHTML && i5.innerHTML==i6.innerHTML && i6.innerHTML==i4.innerHTML && i4.innerHTML!="-"){
        alert("Player " + (user + 1) + " Wins");
    }
    else if(i7.innerHTML==i8.innerHTML && i8.innerHTML==i9.innerHTML && i9.innerHTML==i7.innerHTML && i7.innerHTML!="-"){
        alert("Player " + (user + 1) + " Wins");
    }
}

//****************************************************************************************************************//

$(function animate() {
    // run the currently selected effect
    function runEffect() {
        //*************EFFECTS*************
        // blind, bounce, clip, drop, explode, fold, highlight, puff, pulsate, scale, shake, size, slide
        // get effect type from
        var selectedEffect = 'slide';    /*$( "#effectTypes" ).val();*/

        // most effect types need no options passed by default
        var options = {};
        // some effects have required parameters
        if ( selectedEffect === "scale" ) {
            options = { percent: 0 };
        } else if ( selectedEffect === "size" ) {
            options = { to: { width: 200, height: 60 } };
        }

        // run the effect
        $( ".effect" ).hide( selectedEffect, options, 1500, callback );
    };

    // callback function to bring a hidden box back
    function callback() {
        setTimeout(function() {
            $( "#box" ).removeAttr( "style" ).hide().fadeIn();
        }, 100 );
    };

    // set effect from select menu value
    $( "#button" ).click(function() {
        runEffect();
    });
})
//*************************************************************************************************//
$("#button").click(function(){
//    $("#box").removeClass("hide");
});