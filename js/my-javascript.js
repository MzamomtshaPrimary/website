$(document).ready(function(){
  $('#image').click(function(){
    $('#navbar').css('background-color','red');
  });
  $('#aboutUs').click(function(){
    $('#navbar').css('background-color','green');
  });
  $('#events').click(function(){
    $('#navbar').css('background-color','purple');
  });
  $('#contacts').click(function(){
    $('#navbar').css('background-color','black');
  });
});

var container = document.getElementById('formContainer').style;
var heading = document.getElementById('heading').style;
var form = document.getElementById('form').style;
var labelfname = document.getElementById('firstName').style;
var labellname = document.getElementById('lastName').style;
var labelmail = document.getElementById('Email').style;
var button = document.getElementById('btn').style;
var divfname = document.getElementById('firstName').style;
var divlname = document.getElementById('lastName').style;
var divmail = document.getElementById('Email').style;
var inputname = document.getElementById('name100');
var inputsurname = document.getElementById('surname100');
var inputemail = document.getElementById('email100');
var inputphone = document.getElementById('phone100');
heading.backgroundColor = "black";
heading.color = "black";
container.position ="relative";
container.left = "30%";
container.width = "40%";
container.marginBottom = "20px";
container.border = "2px solid red";
form.display = "flex";
form.flexDirection = "column";
form.justifyContent = "center";



function validate(){
  var name = document.getElementById('name100');
  var surname = document.getElementById('surname100');
  var email = document.getElementById('email100');
  var phone = document.getElementById('phone100');

  var letters = /^[a-zA-Z]+$/;
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var phoneno = /^\d{10}$/;
  if(name.value == "" || !name.value.match(letters)){
    alert("First Name details entered is incorrect, please try again");
    return false;
  }else if(surname.value == "" || !surname.value.match(letters)){
    alert("Last Name details entered is incorrect, please try again");
    return false;
  }else if(email.value == "" || !email.value.match(mailformat)){
    alert("Email details entered is incorrect, please try again");
    return false;
  }else if(phone.value == "" || !phone.value.match(phoneno)){
    alert("Phone details entered is incorrect, please try again");
    return false;
  }else{
    alert("Details entered is correct, you can add more");
    return true;
  }
}
