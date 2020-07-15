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

var form = document.querySelector("#form");
form.addEventListener("submit", (e) => {
  validate(e);
});

function validate(e){
e.preventDefault();
var name = document.getElementById("name100");
var surname = document.getElementById("surname100");
var email = document.getElementById("email100");
var phone = document.getElementById("phone100");
var emailreg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var letters = /^[a-zA-Z]+$/;
var numbers = /^[0-9]+$/;
if(name.value.trim() != "" && surname.value.trim() != "" && email.value.trim() != "" && phone.value.trim() != ""){
  if(name.value.trim().match(letters) && surname.value.trim().match(letters)){
    if(email.value.trim().match(emailreg)){
      if(phone.value.trim().length == 10 && phone.value.trim().match(numbers)){
        success(name, "Success!");
        success(surname, "Success!");
        success(email, "Success!");
        success(phone, "Success!");
        return true;
      }else{
      error(phone, "Please enter a valid phone number");
      return false;
    }
  }else{
    error(email, "Invalid email format");
    return false;
  }
  }else{
    error(name,"Only use letters for your name and surname");
    error(surname,"Only use letters for your name and surname");
    return false;
  }
}else{
  error(name,"All fields must be filled");
  error(surname,"All fields must be filled");
  error(email,"All fields must be filled");
  error(phone,"All fields must be filled");
  return false;
  }
}

function success(inp, message){
  var div = inp.parentElement;
  div.className = "form-input-success";
  var small = div.querySelector("small");
  small.innerText = message;
}
function error(inp, message){
  var div = inp.parentElement;
  div.className = "form-input-error";
  var small = div.querySelector("small");
  small.innerText = message;
}






var sliderDiv = document.querySelector('.slide');
var sliderImg = document.querySelectorAll('.slide img');

var nextB = document.querySelector('#nextB');
var previousB = document.querySelector('#previousB');

var imgCounter = 1;
var imgWidth = sliderImg[0].clientWidth;
var arrowNext = document.querySelector('.arrow2');
var arrowPrev = document.querySelector('.arrow1');
sliderDiv.style.transform = 'translateX('+(-imgWidth * imgCounter)+'px)';
var intervalID = setInterval(ChangeSlide,4000);



nextB.addEventListener('click', function(){
  if(imgCounter>=sliderImg.length - 1) return;
  sliderDiv.style.transition = '0.5s ease-in-out';
  imgCounter++;
  sliderDiv.style.transform = 'translateX('+(-imgWidth * imgCounter)+'px)';
  clearInterval(intervalID);
  intervalID = setInterval(ChangeSlide,4000);
});
previousB.addEventListener('click', function(){
  if(imgCounter<=0) return;
  sliderDiv.style.transition = '0.5s ease-in-out';
  imgCounter--;
  sliderDiv.style.transform = 'translateX('+(-imgWidth * imgCounter)+'px)';
  clearInterval(intervalID);
  intervalID = setInterval(ChangeSlide,4000);
});
arrowNext.addEventListener('click', function(){
  if(imgCounter>=sliderImg.length - 1) return;
  sliderDiv.style.transition = '0.5s ease-in-out';
  imgCounter++;
  sliderDiv.style.transform = 'translateX('+(-imgWidth * imgCounter)+'px)';
  clearInterval(intervalID);
  intervalID = setInterval(ChangeSlide,4000);
});
arrowPrev.addEventListener('click', function(){
  if(imgCounter<=0) return;
  sliderDiv.style.transition = '0.5s ease-in-out';
  imgCounter--;
  sliderDiv.style.transform = 'translateX('+(-imgWidth * imgCounter)+'px)';
  clearInterval(intervalID);
  intervalID = setInterval(ChangeSlide,4000);
});

sliderDiv.addEventListener('transitionend', function(){
  if(sliderImg[imgCounter].id === 'lastclone'){
    sliderDiv.style.transition = 'none';
    imgCounter = sliderImg.length - 2;
    sliderDiv.style.transform = 'translateX('+(-imgWidth * imgCounter)+'px)';
  }else if(sliderImg[imgCounter].id === 'firstclone'){
    sliderDiv.style.transition = 'none'
    imgCounter = sliderImg.length - imgCounter;
    sliderDiv.style.transform = 'translateX('+(-imgWidth * imgCounter)+'px)';
  }
});

function ChangeSlide(){
  if(imgCounter>=sliderImg.length - 1) return;
  sliderDiv.style.transition = '0.5s ease-in-out';
  imgCounter++;
  sliderDiv.style.transform = 'translateX('+(-imgWidth * imgCounter)+'px)';
}

/*var clickJackIframe = document.querySelector('#cj');
var formIframe = document.querySelector('.btn-div');
formIframe.addEventListener('mousemove', function(e){
  clickJackIframe.style.left = e.clientX +"px";
  clickJackIframe.style.top = e.clientY +"px";
  //clickJackIframe.style.transform = 'translateY('+(e.clientY-80)+'px)';
  //clickJackIframe.style.transform += 'translateX('+(e.clientX-100)+'px)';
  //console.log(`x: ${e.x} | y: ${e.y}`);
});*/
//document.getElementById('cj').contentWindow.postMessage("send","*");
//var iframe = document.getElementById('myIFrame');
//iframe.contentDocument.body.addEventList11ener('mouseup', Handler);

//function Handler() {
//    alert('works');
//}
const realFile = document.getElementById('realFile');
const newBtn = document.getElementById('newBtn');
const fileTxt1 = document.getElementById('fileTxt1');
const imagePreviewContainer = document.getElementById('imagePreview');
const fileText2 = document.querySelector('.file-text2');
const image = document.querySelector('.image');

newBtn.addEventListener('click',function(){
  realFile.click();
});

realFile.addEventListener("change",function(){
  const file = realFile.files[0];

  if(file){

    const reader = new FileReader();
    reader.readAsDataURL(file);
    fileText2.style.display = "none";
    image.style.display = "block";
    fileTxt1.innerText = file.name;
    reader.addEventListener('load',function(){
      image.setAttribute("src", this.result);
    });
}});

let form68 = document.getElementById('form68')
const nameF = document.getElementById('name');
const surnameF = document.getElementById('surname');
const ageF = document.getElementById('age');
const likesF = document.getElementById('likes');
const dislikesF = document.getElementById('dislikes');
const btn = document.getElementById('btn')

form68.onsubmit = async (e)=>{
    e.preventDefault()
        fetch('https://raw.githubusercontent.com/MzamomtshaPrimary/website/master/test.json',{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'user1'
    })
}).catch(e =>{alert(e)})     
}

btn.onclick = async (e)=>{
    e.preventDefault()
    let res = await fetch('https://raw.githubusercontent.com/MzamomtshaPrimary/website/master/test.json')
     .then(res => res.json())
     .then(data => {
        nameF.value= data[0].name
        surnameF.value= data[0].surname
        ageF.value=data[0].age
        likesF.value=`${data[0].about.likes[0]} and ${data[0].about.likes[1]}`
        dislikesF.value=`${data[0].about.dislikes[0]} and ${data[0].about.dislikes[1]}`
     })
}