// add highlight to menu
if(location.pathname=="/") { document.getElementById("home").classList.add("active");};
if(location.pathname=="/aboutme") { document.getElementById("about").classList.add("active");};
if(location.pathname=="/contact") { document.getElementById("contact").classList.add("active");};
if(location.pathname=="/portfolio") { document.getElementById("portfolio").classList.add("active");};

function removehighlight(){
  document.getElementById("home").classList.remove("active")
  document.getElementById("about").classList.remove("active")
  document.getElementById("contact").classList.remove("active")


}

document.getElementById("home").addEventListener("click", function(){
  removehighlight();
  document.getElementById("home").classList.add("active");
});
document.getElementById("about").addEventListener("click", function(){
  removehighlight();
  document.getElementById("about").classList.add("active");
});
document.getElementById("contact").addEventListener("click", function(){
  removehighlight();
  document.getElementById("contact").classList.add("active");
});
document.getElementById("banner").addEventListener("click", function(){
  removehighlight();
  document.getElementById("home").classList.add("active");
});


var slideIndex = 1;
var myTimer;
var slideshowContainer;
//showSlides(slideIndex);

window.addEventListener("load",function() {
  showSlides(slideIndex);
  myTimer = setInterval(function(){plusSlides(1)}, 4000);


  slideshowContainer = document.getElementsByClassName('slideshow-inner')[0];

  slideshowContainer.addEventListener('mouseenter', pause)
  slideshowContainer.addEventListener('mouseleave', resume)
})

// NEXT AND PREVIOUS CONTROL
function plusSlides(n){
  clearInterval(myTimer);
  if (n < 0){
    showSlides(slideIndex -= 1);
  } else {
   showSlides(slideIndex += 1); 
  }
  if (n === -1){
    myTimer = setInterval(function(){plusSlides(n + 2)}, 4000);
  } else {
    myTimer = setInterval(function(){plusSlides(n + 1)}, 4000);
  }
}

//Controls the current slide and resets interval if needed
function currentSlide(n){
  clearInterval(myTimer);
  myTimer = setInterval(function(){plusSlides(n + 1)}, 4000);
  showSlides(slideIndex = n);
}

function showSlides(n){
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dot");
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
}

pause = () => {
  clearInterval(myTimer);
}

resume = () =>{
  clearInterval(myTimer);
  myTimer = setInterval(function(){plusSlides(slideIndex)}, 4000);
}

function redirect() {
	var username = document.getElementById('username').value;
	var comment = document.getElementById('comment').value;
	console.log(username)
	if (username == "" || comment == ""){
		alert("Please don't leave name or comment blank!");
		location = "contact";	
	}
	else{
		return true
	}
	return false
}




function showWork() {
  // show hidden elements if display is none, else hide elements
  var sf = document.getElementById("stanford");
  if (sf.style.display === "none") {
    sf.style.display = "block";
  } else {
    sf.style.display = "none";
  }
  var uc = document.getElementById("unitycouncil");
  if (uc.style.display === "none") {
    uc.style.display = "block";
  } else {
    uc.style.display = "none";
  }
}


function showProject() {
  // show hidden elements if display is none, else hide elements
  var zoo = document.getElementById("zooGame");
  if (zoo.style.display === "none") {
    zoo.style.display = "block";
  } else {
    zoo.style.display = "none";
  }
  var board = document.getElementById("boardGame");
  if (board.style.display === "none") {
    board.style.display = "block";
  } else {
    board.style.display = "none";
  }
  var website = document.getElementById("website");
  if (website.style.display === "none") {
    website.style.display = "block";
  } else {
    website.style.display = "none";
  }
}