var pics = ["Hund", "Katze", "Panda", "Adler"];//, "Flamingo", "Goldfisch", "Schildkröte", "Schnecke", "Waschbär", "Wellensittich", 
            //"Löwe", "Chamäleon", "Delfin", "Tintenfisch", "Eichhörnchen", "Tiger", "Gorilla", "Faultier"];

function rando() {
    var abfrage = Math.floor(Math.random() * pics.length);
    return abfrage; }

var rand = rando();

function randTier() {
        document.getElementById("bild").src = "images/"+pics[rand]+".jpg"; } 
      
function myFunction() {
    var text = "";
    var x = document.getElementById("eingabe");
    
        if(x[0].value==pics[rand]) {
            document.getElementById("tierinput").value = "";            
            document.getElementById("result").style.color = "green";    //grüner Text wenns richtig is
            text = "des woa richtig ;-)";
            pics[rand] = "leer";
            rand = rando();
            
            while(pics[rand] == "leer") {
                rand = rando(); } 
            
            randTier();
            document.getElementById("tierinput").focus(); }
    
        else {
            document.getElementById("result").style.color = "red";      //roter Text wenns falsch is
            text = "leider foisch :-("; } 
    
    document.getElementById("result").innerHTML = text; }