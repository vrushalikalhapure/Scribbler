//modal1
var modal1 = document.getElementById("myModal1");

var span1 = document.getElementsByClassName("close")[0];

span1.onclick = function(){
    modal1.style.display = "none";
}

//modal2
var modal2 = document.getElementById("myModal2");

var span2 = document.getElementsByClassName("close1")[0];

span2.onclick = function(){
    modal2.style.display = "none";
}

var signUp = document.getElementById("signUpLink");

signUp.onclick = function(){
    modal2.style.display = "none";
    modal1.style.display = "block";
}

//modal3
var modal3 = document.getElementById("myModal3");

var span3 = document.getElementsByClassName("close2")[0];

span3.onclick = function(){
    modal3.style.display = "none";
}

window.onclick = function(event){
    if(event.target == modal1){
        modal1.style.display = "none";
    } else if(event.target == modal2){
        modal2.style.display = "none";
    }else if(event.target == modal3){
        modal3.style.display = "none";
    }
}

