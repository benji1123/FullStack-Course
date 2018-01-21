
//Click Event: switch images

//select heading (h1) from index.html, set as a variable
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/profile-pic.png') {
      myImage.setAttribute ('src','images/pic-2.png');
    } else {
      myImage.setAttribute ('src','images/profile-pic.png');
    }
}

//create a personalized welcome msg

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Welome, ' + myName;
}

//initialization code - check if user has inputted username before
if(!localStorage.getItem('name')){
	setUserName();
} else{
	var storedName = localStorage.getItem('name');
	var storedName=localStorage.getItem('name');
	myHeading.textContent='Welcome, '+storedName;
}

myButton.onclick = function() {
	setUserName();
}
