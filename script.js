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

// max guests for Venues
function checkVenue(venue){
  let value = venue.value;
  document.getElementById("guestInput").setAttribute('max', value);
  }

//limit date before today
function checkToday(today){
  var today = new Date().toISOString().split('T')[0];
  document.getElementById("wedDate").setAttribute('min', today);
  }

//compute total price booking page
function computeTotal(){
	let pricePPArray = document.getElementsByClassName("pricepp");
	let fixedPrice = 0;
	let totalPrice = 0;
	let ppPrice = 0;
	let guestsNumber = parseInt(document.getElementById("guestInput").value);

	for (var i = 0; i < pricePPArray.length; i++) {
    	console.log(pricePPArray[i].value);
		if(pricePPArray[i].checked == true){
			ppPrice+=parseInt(pricePPArray[i].value);
		  }
	}

	let priceArray = document.getElementsByClassName("price");
	for (var i = 0; i < priceArray.length; i++) {
    	console.log(priceArray[i].value);
		if(priceArray[i].checked == true){
			fixedPrice+=parseInt(priceArray[i].value);
		}
	}
	totalPrice = fixedPrice + ppPrice * guestsNumber;

	let resultString = "Price Breakdown:<br>";
	console.log("Price Breakdown:");
	resultString += "Price Per person: " + ppPrice + "<br>";
	console.log("Price Per person: " + ppPrice);
	resultString += "Guests Number: " + guestsNumber + "<br>";
	console.log("Guests Number: " + guestsNumber);
	resultString += "Fixed costs: " + fixedPrice + "<br>";
	console.log("Fixed costs: " + fixedPrice);
	resultString += "Total: " + totalPrice + "<br>";
	console.log("Total: " + totalPrice);

	if (totalPrice > 10000){
		totalPrice = totalPrice * 0.9;
		resultString += "Discounted Price (10%): " + totalPrice + "<br>";
		console.log("Discounted Price (10%): " + totalPrice);
	}


	document.getElementById("results").innerHTML = resultString;

    //Do something

	// getElementById("show-login");
	//   if (x.style.display == "none") {
	//     x.style.display = "block";
	//   } else {
	//     x.style.display = "none";
	//   }
}
