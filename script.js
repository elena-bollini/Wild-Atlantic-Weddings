//wedding stylwe menu in wedding page
function showOption1(){
  $('.show-detail1').show();
}

function showOption2(){
  $('.show-detail2').show();
}

function showOption3(){
  $('.show-detail3').show();
}

function showOption4(){
    $('.show-detail4').show();
}

function showRoom1(){
    $('.show-room1').show();
}

function showRoom2(){
    $('.show-room2').show();
}

function showRoom3(){
    $('.show-room3').show();
}

function showRoom4(){
    $('.show-room4').show();
}

function showLogin(){
  $('.show-login').show();
}

//login validations
function validateForm(){
  let x=document.forms["login-form"]["username"].value;
  let y=document.forms["login-form"]["password"].value;
  if (x==null || x==""){
    alert("Username must be filled out");
  }else if (y ==null || y.length !== 9){
    alert("Password must be 9 character");
    return false;
  } else {alert("You logged in");}
}
