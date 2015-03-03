
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
    document.getElementById("player-input1").value = user1;
    document.getElementById("player-input2").value = user2;

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

        alert("Already Acquired")

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

function reset(){
    var divs = document.getElementsByClassName('button');
    for(var i=0; i<divs.length; i++){
        divs[i].innerHTML = '-';
    }
    document.getElementById('win').innerHTML = '';
}
//****************************************************************************
function check(obj){
    if(i1.innerHTML==i2.innerHTML && i2.innerHTML==i3.innerHTML && i3.innerHTML==i1.innerHTML && i1.innerHTML!="-"){
        if(user == 0){
            alert("Player " + (user + 1) + " Wins");
            document.getElementById('win').innerHTML = user1 + ' ' + 'Wins';
        }else if(user == 1){
            document.getElementById('win').innerHTML = user2 + ' ' + 'Wins';
        }
    }else if(i1.innerHTML==i5.innerHTML && i5.innerHTML==i9.innerHTML && i9.innerHTML==i1.innerHTML && i1.innerHTML!="-"){
        if(user == 0){
            document.getElementById('win').innerHTML = user1 + ' ' + 'Wins';
        }else if(user == 1){
            document.getElementById('win').innerHTML = user2 + ' ' + 'Wins';
        }
    }else if(i1.innerHTML==i4.innerHTML && i4.innerHTML==i7.innerHTML && i7.innerHTML==i1.innerHTML && i1.innerHTML!="-"){
        if(user == 0){
            document.getElementById('win').innerHTML = user1 + ' ' + 'Wins';
        }else if(user == 1){
            document.getElementById('win').innerHTML = user2 + ' ' + 'Wins';
        }
    }

    else if(i2.innerHTML==i5.innerHTML && i5.innerHTML==i8.innerHTML && i8.innerHTML==i2.innerHTML && i2.innerHTML!="-"){
        if(user == 0){
            document.getElementById('win').innerHTML = user1 + ' ' + 'Wins';
        }else if(user == 1){
            document.getElementById('win').innerHTML = user2 + ' ' + 'Wins';
        }
    }
    else if(i3.innerHTML==i6.innerHTML && i6.innerHTML==i9.innerHTML && i9.innerHTML==i3.innerHTML && i3.innerHTML!="-"){
        if(user == 0){
            document.getElementById('win').innerHTML = user1 + ' ' + 'Wins';
        }else if(user == 1){
            document.getElementById('win').innerHTML = user2 + ' ' + 'Wins';
        }
    }

    else if(i4.innerHTML==i5.innerHTML && i5.innerHTML==i6.innerHTML && i6.innerHTML==i4.innerHTML && i4.innerHTML!="-"){
        if(user == 0){
            document.getElementById('win').innerHTML = user1 + ' ' + 'Wins';
        }else if(user == 1){
            document.getElementById('win').innerHTML = user2 + ' ' + 'Wins';
        }
    }
    else if(i7.innerHTML==i8.innerHTML && i8.innerHTML==i9.innerHTML && i9.innerHTML==i7.innerHTML && i7.innerHTML!="-"){
        if(user == 0){
            document.getElementById('win').innerHTML = user1 + ' ' + 'Wins';
        }else if(user == 1){
            document.getElementById('win').innerHTML = user2 + ' ' + 'Wins';
        }
    }
}

function setLogo(){
//    var logo = document.getElementsByClassName('effect-up');
//    logo.style.position = 'absolute';
//    logo.style.right = '100px';
//    logo.style.bottom = '100px';

    document.getElementsByClassName('effect-up').style.position = 'absolute';
    document.getElementsByClassName('effect-up').style.right = '100px';;
    document.getElementsByClassName('effect-up').style.bottom = '100px';
}

//****************************************************************************************************************//

$(function animate() {
    // run the currently selected effect
    function runEffect() {
        //*************EFFECTS*************
        // blind, bounce, clip, drop, explode, fold, highlight, puff, pulsate, scale, shake, size, slide
        // get effect type from
        var selectedEffect = 'explode';    /*$( "#effectTypes" ).val();*/

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
        $( ".effect-up" ).hide( "explode", options, 1500, callback );
    };

    // callback function to bring a hidden box back
    function callback() {
        setTimeout(function() {
            $( "#box" ).removeAttr( "style" ).hide().fadeIn();
//            setLogo();
            $( ".effect-up" ).removeAttr( "style" ).hide().fadeIn();
            $( ".info-div" ).removeAttr( "style" ).hide().fadeIn();
        }, 100 );
    };

    // set effect from select menu value
    $( "#button" ).click(function() {
        runEffect();
    });
})
//*************************************************************************************************//
