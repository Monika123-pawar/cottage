function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
VanillaTilt.init(document.querySelector(".logo-main"), {
    max: 25,
    speed: 400
});
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
var myCarousel = document.querySelector('#myCarousel');
var carousel = new bootstrap.Carousel(myCarousel);


function checkInputs() {
 
	// trim to remove the whitespaces
  const username = document.getElementById('username');
const email = document.getElementById('email');
const phoneNumber = document.getElementById('phoneNumber');


	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
  const phoneNumberValue = phoneNumber.value.trim();

	// const passwordValue = password.value.trim();
	// const password2Value = password2.value.trim();
	
	if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
	} else {
		setSuccessFor(username);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}

  if(phoneNumberValue === '') {
		setErrorFor(phoneNumber, 'Phone Number cannot be blank');
	} else if (!isPhoneNumber(phoneNumberValue)) {
		setErrorFor(phoneNumber, 'Not a valid Phone Number');
	} else {
		setSuccessFor(phoneNumber);
	}
	
}

function setErrorFor(input, message) {

	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
  
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
function isPhoneNumber(phoneNumber) {
  return /^\d{10}$/;
test(phoneNumber);
}
function checkInputs2() {
 
	// trim to remove the whitespaces
  const username = document.getElementById('username2');
const email = document.getElementById('email2');

	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	// const passwordValue = password.value.trim();
	// const password2Value = password2.value.trim();
	
	if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
	} else {
		setSuccessFor(username);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
}
function toTop() {
  var mybutton = document.getElementById("toTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
  
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
 
}

}

/* typing effect */
new TypeIt('#myElement', {
    strings: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus est officiis expedita tenetur voluptate minus ratione perspiciatis sunt adipisci, repellat numquam tempora id fugiat! Eligendi nisi illum voluptatum rerum doloremque.!"
  }).go();