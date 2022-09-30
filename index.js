function showMenu() {
  var x = document.getElementById("interactive-bar");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

//.....................................gallery number 1
var slideIndex = 1;

showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
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
}

//.....................................gallery number 2
var slideIndex2 = 1;

showSlides2(slideIndex2);

// Next/previous controls
function plusSlides2(n) {
  showSlides2((slideIndex2 += n));
}

// Thumbnail image controls
function currentSlide2(n) {
  showSlides2((slideIndex2 = n));
}

function showSlides2(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides2");
  var dots = document.getElementsByClassName("dot2");
  if (n > slides.length) {
    slideIndex2 = 1;
  }
  if (n < 1) {
    slideIndex2 = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex2 - 1].style.display = "block";
  dots[slideIndex2 - 1].className += " active";
}
//.....................................gallery number 3
var slideIndex3 = 1;

showSlides3(slideIndex3);

// Next/previous controls
function plusSlides3(n) {
  showSlides3((slideIndex3 += n));
}

// Thumbnail image controls
function currentSlide3(n) {
  showSlides3((slideIndex3 = n));
}

function showSlides3(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides3");
  var dots = document.getElementsByClassName("dot3");
  if (n > slides.length) {
    slideIndex3 = 1;
  }
  if (n < 1) {
    slideIndex3 = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex3 - 1].style.display = "block";
  dots[slideIndex3 - 1].className += " active";
}
//.....................................gallery number 4
var slideIndex4 = 1;

showSlides4(slideIndex4);

// Next/previous controls
function plusSlides4(n) {
  showSlides4((slideIndex4 += n));
}

// Thumbnail image controls
function currentSlide4(n) {
  showSlides4((slideIndex4 = n));
}

function showSlides4(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides4");
  var dots = document.getElementsByClassName("dot4");
  if (n > slides.length) {
    slideIndex4 = 1;
  }
  if (n < 1) {
    slideIndex4 = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex4 - 1].style.display = "block";
  dots[slideIndex4 - 1].className += " active";
}
//.....................................gallery number 5
var slideIndex5 = 1;

showSlides5(slideIndex5);

// Next/previous controls
function plusSlides5(n) {
  showSlides5((slideIndex5 += n));
}

// Thumbnail image controls
function currentSlide5(n) {
  showSlides5((slideIndex5 = n));
}

function showSlides5(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides5");
  var dots = document.getElementsByClassName("dot5");
  if (n > slides.length) {
    slideIndex5 = 1;
  }
  if (n < 1) {
    slideIndex5 = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex5 - 1].style.display = "block";
  dots[slideIndex5 - 1].className += " active";
}
//.....................................gallery number 6
var slideIndex6 = 1;

showSlides6(slideIndex6);

// Next/previous controls
function plusSlides6(n) {
  showSlides6((slideIndex6 += n));
}

// Thumbnail image controls
function currentSlide6(n) {
  showSlides6((slideIndex6 = n));
}

function showSlides6(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides6");
  var dots = document.getElementsByClassName("dot6");
  if (n > slides.length) {
    slideIndex6 = 1;
  }
  if (n < 1) {
    slideIndex6 = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex6 - 1].style.display = "block";
  dots[slideIndex6 - 1].className += " active";
}

//.....................................gallery number 7
var slideIndex7 = 1;

showSlides7(slideIndex7);

// Next/previous controls
function plusSlides7(n) {
  showSlides7((slideIndex7 += n));
}

// Thumbnail image controls
function currentSlide7(n) {
  showSlides7((slideIndex7 = n));
}

function showSlides7(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides7");
  var dots = document.getElementsByClassName("dot7");
  if (n > slides.length) {
    slideIndex7 = 1;
  }
  if (n < 1) {
    slideIndex7 = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex7 - 1].style.display = "block";
}

// .............................lightbox
var slideNumber = slideIndex;
openSlides(slideNumber);

// Next/previous controls
function nextSlides(n) {
  openSlides((slideNumber += n));
}

// Thumbnail image controls
function thisSlide(n) {
  openSlides((slideNumber = n));
}

function openSlides(n) {
  var i = slideNumber;
  var slides = document.getElementsByClassName("slide-box");
  var miniatures = document.getElementsByClassName("mini");
  if (n > slides.length) {
    slideNumber = 1;
  }
  if (n < 1) {
    slideNumber = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < miniatures.length; i++) {
    miniatures[i].className = miniatures[i].className.replace(" current", "");
  }
  slides[slideNumber - 1].style.display = "block";
  miniatures[slideNumber - 1].className += " current";
}

// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
  thisSlide(slideNumber);
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

// .............................lightbox2
var slideNumber = slideIndex;
openSlides2(slideNumber);

// Next/previous controls
function nextSlides2(n) {
  openSlides2((slideNumber += n));
}

// Thumbnail image controls
function thisSlide2(n) {
  openSlides2((slideNumber = n));
}

function openSlides2(n) {
  var i = slideNumber;
  var slides = document.getElementsByClassName("slide-box2");
  var miniatures = document.getElementsByClassName("mini2");
  if (n > slides.length) {
    slideNumber = 1;
  }
  if (n < 1) {
    slideNumber = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < miniatures.length; i++) {
    miniatures[i].className = miniatures[i].className.replace(" current", "");
  }
  slides[slideNumber - 1].style.display = "block";
  miniatures[slideNumber - 1].className += " current";
}

// Open the Modal
function openModal2() {
  document.getElementById("myModal2").style.display = "block";
}

// Close the Modal
function closeModal2() {
  document.getElementById("myModal2").style.display = "none";
}

// .............................lightbox3
var slideNumber = slideIndex;
openSlides3(slideNumber);

// Next/previous controls
function nextSlides3(n) {
  openSlides3((slideNumber += n));
}

// Thumbnail image controls
function thisSlide3(n) {
  openSlides3((slideNumber = n));
}

function openSlides3(n) {
  var i = slideNumber;
  var slides = document.getElementsByClassName("slide-box3");
  var miniatures = document.getElementsByClassName("mini3");
  if (n > slides.length) {
    slideNumber = 1;
  }
  if (n < 1) {
    slideNumber = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < miniatures.length; i++) {
    miniatures[i].className = miniatures[i].className.replace(" current", "");
  }
  slides[slideNumber - 1].style.display = "block";
  miniatures[slideNumber - 1].className += " current";
}

// Open the Modal
function openModal3() {
  document.getElementById("myModal3").style.display = "block";
}

// Close the Modal
function closeModal3() {
  document.getElementById("myModal3").style.display = "none";
}

// .............................lightbox4
var slideNumber = slideIndex;
openSlides4(slideNumber);

// Next/previous controls
function nextSlides4(n) {
  openSlides4((slideNumber += n));
}

// Thumbnail image controls
function thisSlide4(n) {
  openSlides4((slideNumber = n));
}

function openSlides4(n) {
  var i = slideNumber;
  var slides = document.getElementsByClassName("slide-box4");
  var miniatures = document.getElementsByClassName("mini4");
  if (n > slides.length) {
    slideNumber = 1;
  }
  if (n < 1) {
    slideNumber = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < miniatures.length; i++) {
    miniatures[i].className = miniatures[i].className.replace(" current", "");
  }
  slides[slideNumber - 1].style.display = "block";
  miniatures[slideNumber - 1].className += " current";
}

// Open the Modal
function openModal4() {
  document.getElementById("myModal4").style.display = "block";
}

// Close the Modal
function closeModal4() {
  document.getElementById("myModal4").style.display = "none";
}

// .............................lightbox5
var slideNumber = slideIndex;
openSlides5(slideNumber);

// Next/previous controls
function nextSlides5(n) {
  openSlides5((slideNumber += n));
}

// Thumbnail image controls
function thisSlide5(n) {
  openSlides5((slideNumber = n));
}

function openSlides5(n) {
  var i = slideNumber;
  var slides = document.getElementsByClassName("slide-box5");
  var miniatures = document.getElementsByClassName("mini5");
  if (n > slides.length) {
    slideNumber = 1;
  }
  if (n < 1) {
    slideNumber = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < miniatures.length; i++) {
    miniatures[i].className = miniatures[i].className.replace(" current", "");
  }
  slides[slideNumber - 1].style.display = "block";
  miniatures[slideNumber - 1].className += " current";
}

// Open the Modal
function openModal5() {
  document.getElementById("myModal5").style.display = "block";
}

// Close the Modal
function closeModal5() {
  document.getElementById("myModal5").style.display = "none";
}

// .............................lightbox6
var slideNumber = slideIndex;
openSlides6(slideNumber);

// Next/previous controls
function nextSlides6(n) {
  openSlides6((slideNumber += n));
}

// Thumbnail image controls
function thisSlide6(n) {
  openSlides6((slideNumber = n));
}

function openSlides6(n) {
  var i = slideNumber;
  var slides = document.getElementsByClassName("slide-box6");
  var miniatures = document.getElementsByClassName("mini6");
  if (n > slides.length) {
    slideNumber = 1;
  }
  if (n < 1) {
    slideNumber = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < miniatures.length; i++) {
    miniatures[i].className = miniatures[i].className.replace(" current", "");
  }
  slides[slideNumber - 1].style.display = "block";
  miniatures[slideNumber - 1].className += " current";
}

// Open the Modal
function openModal6() {
  document.getElementById("myModal6").style.display = "block";
}

// Close the Modal
function closeModal6() {
  document.getElementById("myModal6").style.display = "none";
}
