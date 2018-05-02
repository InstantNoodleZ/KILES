var pics = ["Hund", "Katze", "Panda", "Adler", "Flamingo", "Goldfisch", "Schildkröte", "Schnecke", "Waschbär", "Wellensittich",
            "Löwe", "Chamäleon", "Delfin", "Tintenfisch", "Eichhörnchen", "Tiger", "Gorilla", "Faultier"];

function rando() {
    var abfrage = Math.floor(Math.random() * pics.length);
    return abfrage;
}

var rand = rando();
var str = "Dein Punktestand:&nbsp;";
var points = 0;


var skpp = -50; //skip penalty
var succ = 100; //success rate
var flsp = -10; //false penalty

var skpmsg = "Bild &uuml;bersrpungen!";
var skpclr = "blue";
var sucmsg = "des woa richtig ;-)";
var succlr = "green";
var faimsg = "leider foisch :-(";
var faiclr = "red";

document.getElementById("tierinput").onkeypress = function (event) {
    if (event.keyCode == 13 || event.which == 13) {
        myFunction();
    }
};

function skip() {
    document.getElementById("tierinput").value = "";
    document.getElementById("result").style.color = skpclr;
    text = skpmsg + "<br>Das Tier war ein " + pics[rand];
    points += skpp;
    pics[rand] = "leer";
    rand = rando();
    for (var i = 0; i < pics.length; i++) {
        if (pics[i] != "leer") {
            while (pics[rand] == "leer") {
                rand = rando();
            }
        }
    }
    randTier();
    document.getElementById("tierinput").focus();
    document.getElementById("points").innerHTML = str + points;
    document.getElementById("result").innerHTML = text;
}

function randTier() {
    if (pics[rand] == "leer")
        parseToScreen();
    document.getElementById("bild").src = "images/" + pics[rand] + ".jpg";
}

function parseToScreen() {
    sessionStorage.setItem("points", points);
    window.open("tierspiel_win.html", '_self', false);
}

function loadScore() {
    document.getElementById("win_points").innerHTML = str + sessionStorage.getItem("points");
}

function myFunction() {
    var text = "";
    var x = document.getElementById("eingabe");

    if (x[0].value == pics[rand]) {
        document.getElementById("tierinput").value = "";
        document.getElementById("result").style.color = succlr; //grüner Text wenns richtig is
        text = sucmsg;
        pics[rand] = "leer";
        rand = rando();

        for (var i = 0; i < pics.length; i++) {
            if (pics[i] != "leer") {
                while (pics[rand] == "leer") {
                    rand = rando();
                }
            }
        }

        randTier();
        document.getElementById("tierinput").focus();
        points += succ;
        document.getElementById("points").innerHTML = str + points;
    } else {
        document.getElementById("result").style.color = faiclr; //roter Text wenns falsch is
        text = faimsg;
        points += flsp;
        document.getElementById("points").innerHTML = str + points;
    }

    document.getElementById("result").innerHTML = text;
}
