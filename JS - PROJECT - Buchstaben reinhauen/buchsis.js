var letters = ['f', 't', 'ß', 'ä', 'ä', 'e', 'z', 'c', 'g', 't', 'l', 'm', 'z', 'p', 't', 'v', 't', 'p', 'k', 'g', 'e', 'ß', 'G'];
      
function check() {
    var i;
    var fail = 0;
    for(i=1; i<24; i++) {
        if(document.getElementById(i).value != letters[i-1] || document.getElementById(i).value == "")   {
            fail++;
        }
    }
    if(fail==0) {
        document.write("kan föhla :D");
    }
    else {
        document.write("trottl");
    }
}

//document.getElementById("myBtn").disabled = true;