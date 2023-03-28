
///^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ working well
// "([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])"
//
//(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)


 function validateEmail(){
    var d = document.forms["myFor"]["email"].value;
    var validMail = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);


    if (d.match(validMail)){
        document.getElementById("email").style.border = "2px solid hsl(347, 92%, 65%)";
        document.getElementById("provide").style.display = "none";
        document.getElementById("filled").style.display = "none";
        document.getElementById("error").style.display = "none";
        return true;
     }
     else if(d == ""){
        document.getElementById("filled").style.display = "block";
        document.getElementById("error").style.display = "block";
        document.getElementById("provide").style.display = "none";
        return false;

     }

     else {
        document.getElementById("filled").style.display = "none";
        document.getElementById("provide").style.display = "block";
        document.getElementById("email").style.border = "2px solid red";
        document.getElementById("error").style.display = "block";
         return false;
    }
 }

 function checkInput(){
    var x = document.forms["myFor"]["email"].value;
    var validInput = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

    if(x.match(validInput)){
        document.getElementById("email").style.border = "2px solid hsl(347, 92%, 65%)";
        document.getElementById("provide").style.display = "none";
        document.getElementById("filled").style.display = "none";
        document.getElementById("error").style.display = "none";
    }
    else{
        document.getElementById("provide").style.display = "block";
        document.getElementById("filled").style.display = "none";
        document.getElementById("email").style.border = "2px solid red";
        document.getElementById("error").style.display = "block";
         return false;
    }

 }


 /*if(d == "") {
    document.getElementById("filled").style.display = "block";
    document.getElementById("email").style.border = "1px solid red";
    document.getElementById("error").style.display = "block";
    document.getElementById("provide").style.display = "none";
    return false;
}*/


