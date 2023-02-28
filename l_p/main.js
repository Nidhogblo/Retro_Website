

function loadDoc0() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("change").innerHTML =
      this.responseText;
    }
    xhttp.open("GET", "FirstPokedex.txt");
    xhttp.send();

    $('.button_0').css("background-color"," #30a7d7");
    $('.button_0').css("color","white");

    $('.button_2').css("background-color"," rgba(225, 225, 225,0.5)");
    $('.button_2').css("color","black");

}
function loadDoc1() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("change").innerHTML =
      this.responseText;
    }
    xhttp.open("GET", "SecondPokedex.txt");
    xhttp.send();

    $('.button_2').css("background-color"," #30a7d7");
    $('.button_2').css("color","white");

    $('.button_0').css("background-color"," rgba(225, 225, 225,0.5)");
    $('.button_0').css("color","black");
}


$(function(){
    $('#button_1').click(function () { 
    //    $('.box').hide();
       $('.box').css("background-color","gray");
       $('#button_1').css("background-color","black");

    
    }); 
    

    
    
});
