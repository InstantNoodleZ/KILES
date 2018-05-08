var letters = ['f', 't', 'ß', 'ä']; //, 'ä', 'e', 'z', 'c', 'g', 't', 'l', 'm', 'z', 'p', 't', 'v', 't', 'p', 'k', 'g', 'e', 'ß', 'G'];


function check() {

    var fail = 0;

    for (var i = 0; i < letters.length; i++) {
        //if(document.getElementById(i).value != letters[i-1])   {
        var indiv = document.getElementById(i);
        document.getElementById("richardisatrottl").innerHTML = indiv.getElementsByTagName("input")[0].value + "&nbsp;" + letters[i];
        if (indiv.getElementsByTagName("input")[0].value != letters[i] || indiv.getElementsByTagName("input")[0].value == "") {
            fail++;
        } else {
            document.getElementById(i).innerHTML = letters[i];
            document.getElementById(i).style.backgroundColor = "green";
        }
    }
    
    /*if (fail == 0) {
        document.getElementById("richardisatrottl").innerHTML = "kan föhla :D";
    } else {
        document.getElementById("richardisatrottl").innerHTML = fail;
    }*/
}

//document.getElementById("myBtn").disabled = true;
