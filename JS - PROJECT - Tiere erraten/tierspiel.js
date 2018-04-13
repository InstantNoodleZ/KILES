//var pics = ["hund", "katze", "panda", "adler", "flamingo", "goldfisch", "schildkroete", "schnecke", "waschbaer", "wellensittich", 
  //                  "loewe", "chamaeleon", "delfin", "tintenfisch", "eichhoernchen", "tiger", "gorilla", "faultier"];
var pics = ["hund", "katze", "panda"];

function rando() {
    var abfrage = Math.floor(Math.random() * pics.length);
        if(pics[abfrage] != "leer") {
            return abfrage;
        } 
        else if(pics.every(leer)) {
            document.write("gschofft :D looooool");
        }
        else {
            rando();
            
        }
}


function leer(tier) {
    return tier = "leer";
}

var rand = rando();

function randTier() {
        document.getElementById("bild").src = "images/"+pics[rand]+".jpg"; }
      
function myFunction() {
    var text = "";
    var x = document.getElementById("eingabe");
    
        if(x[0].value==pics[rand]) {
            document.getElementById("tierinput").value = "";
            document.getElementById("tierinput").focus;                 //funzt nu ned
            document.getElementById("result").style.color = "green";    //grüner Text wenns richtig is
            text = "des woa richtig ;-)";
            pics[rand] = "leer";
            rand = rando();
            randTier(); }
    
        else {
            document.getElementById("result").style.color = "red";      //roter Text wenns falsch is
            text = "leider foisch :-("; } 
    
    document.getElementById("result").innerHTML = text; }