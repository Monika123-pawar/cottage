function openNav() {
  document.getElementById("mySidenav").style.width = "300px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
VanillaTilt.init(document.querySelector(".logo-main"), {
  max: 25,
  speed: 400,
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
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}
var myCarousel = document.querySelector("#myCarousel");
var carousel = new bootstrap.Carousel(myCarousel);

function checkInputs() {
  // trim to remove the whitespaces
  const username = document.getElementById("username");
  const email = document.getElementById("email");
  const phoneNumber = document.getElementById("phoneNumber");

  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const phoneNumberValue = phoneNumber.value.trim();

  // const passwordValue = password.value.trim();
  // const password2Value = password2.value.trim();

  if (usernameValue === "") {
    setErrorFor(username, "Username cannot be blank");
  } else {
    setSuccessFor(username);
  }

  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Not a valid email");
  } else {
    setSuccessFor(email);
  }

  if (phoneNumberValue === "") {
    setErrorFor(phoneNumber, "Phone Number cannot be blank");
  } else if (!isPhoneNumber(phoneNumberValue)) {
    setErrorFor(phoneNumber, "Not a valid Phone Number");
  } else {
    setSuccessFor(phoneNumber);
    return true;
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
function isPhoneNumber(phoneNumber) {
  return /^\d{10}$/;
  test(phoneNumber);
}
function checkInputs2() {
  // trim to remove the whitespaces
  const username = document.getElementById("username2");
  const email = document.getElementById("email2");

  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  // const passwordValue = password.value.trim();
  // const password2Value = password2.value.trim();

  if (usernameValue === "") {
    setErrorFor(username, "Username cannot be blank");
  } else {
    setSuccessFor(username);
  }

  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Not a valid email");
  } else {
    setSuccessFor(email);
    return true;
  }
}
function toTop() {
  var mybutton = document.getElementById("toTop");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
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
new TypeIt("#myElement", {
  strings:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus est officiis expedita tenetur voluptate minus ratione perspiciatis sunt adipisci, repellat numquam tempora id fugiat! Eligendi nisi illum voluptatum rerum doloremque.!",
}).go();

//   weather Animation

$(document).ready(function () {
  window.onload = function raining() {
    setTimeout(function () {
      $(".rain").hide();
      $(".animationSection").css("display", "block");
    }, 1000);
  };

  $(".contactbtn").click(function () {
    if (checkInputs()) {
      $(".contactForm").css("display", "none");
      $(".contact-text-main1").css("display", "none");
      $(".contactFormResponse").css("display", "block");
      setTimeout(() => {
        $(".contactForm").css("display", "block");
        $(".contact-text-main1").css("display", "block");
        $(".contactFormResponse").css("display", "none");
        // $('.contactForm')[0].reset();
        $(".fa-check-circle").css("visibility", "hidden");
        $(".form-control.success input ").css("border-color", "gray");
        $(".contactForm input").val("");
        $(".contactForm textarea").val("");
      }, 5000);
    }
  });
  $(".enquirybtn").click(function () {
    if (checkInputs2()) {
      $(".enquiryForm").css("display", "none");
      $(".enquiry-text-main1").css("display", "none");
      $(".enquiryFormResponse").css("display", "block");
      setTimeout(() => {
        $(".enquiryForm").css("display", "block");
        $(".enquiry-text-main1").css("display", "block");
        $(".enquiryFormResponse").css("display", "none");
        // $('.contactForm')[0].reset();
        $(".fa-check-circle").css("visibility", "hidden");
        $(".form-control.success input ").css("border-color", "gray");
        $(".enquiryForm input").val("");
        $(".enquiryForm textarea").val("");
      }, 3000);
    }
  });
 
});
// image lazy loading

function id(el) {
  return document.getElementById(el);
}

var raincanvas = id('raincanvas');
var c = raincanvas.getContext('2d');

var screen = {
  width: 1536,
  height: 722
}
raincanvas.width = screen.width;
raincanvas.height = screen.height;
var colors = ['white'];

function Rain(x, y, w, h, fall_speed, color) {
  this.w = w;
  this.h = h;
  this.x = x;
  this.y = y;
  this.fall_speed = fall_speed;
  this.color = color;
  this.draw = function() {
      c.fillStyle = this.color;
      c.fillRect(this.x, this.y, this.w, this.h);

  }
  this.update = function() {
      // this.x += this.dx;
      this.y += this.fall_speed;

      if (this.y >= screen.height) {
          this.y = -this.h;
          this.x = Math.floor(Math.random() * screen.width);
          this.color = colors[Math.floor(Math.random() * colors.length)];
      }
      // this.y = screen.floor - this.h;

      this.draw();

  }

}


var w = 1;
var h = 100;
var fall_speed = 30;
var rains = [

];

for (var i = 0; i < 30; i++) {
  var x = Math.floor(Math.random() * screen.width);
  var y = Math.floor(Math.random() * screen.height);
  rains.push(new Rain(x, y, w, h, fall_speed, colors[Math.floor(Math.random() * colors.length)]));
}
var lastFrame = 0;

function render(time) {
  var FPS = Math.floor(1000 / (time - lastFrame));
  lastFrame = time;

  requestAnimationFrame(render);
  c.clearRect(0, 0, screen.width, screen.height);
  c.font = '20px Verdana';
  c.fillStyle = 'white';
  c.fillText(FPS + ' FPS', 10, 50);
  for (var i = 0; i < rains.length; i++) {
      rains[i].update();
  }
}
render();
