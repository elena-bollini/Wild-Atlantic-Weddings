//wedding style menu in wedding page
function showOption1(){
  $('.show-detail1').toggle();
}


function showOption2(){
  $('.show-detail2').toggle();
}

function showOption3(){
  $('.show-detail3').toggle();
}

function showOption4(){
    $('.show-detail4').toggle();
}

function showOption5(){
  $('.show-detail5').toggle();
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

// validate login fields
function validationSubmition(){
  let x=document.forms["submitForm"]["name"].value;
  let y=document.forms["submitForm"]["email"].value;
  if (x==null || x==""){
    alert("Name must be filled out");
  }else if (y ==null || y.length < 7){
    alert("email must be filled out");
    return false;
    } else {alert("Thank you. We will send you same wedding options");
  }
}

//show hidden login form
function showLogin(){
  let x = document.getElementById("show-login");
  if (x.style.display == "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
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
