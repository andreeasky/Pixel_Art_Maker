//Variables

var canvas = document.getElementById("pixelCanvas");

var submitButton = document.getElementById("submitButton");

var colorPicker = document.getElementById("colorPicker");

var inputHeight = document.getElementById("inputHeight");

var inputWidth = document.getElementById("inputWidth");


//Event Listener for the Button

submitButton.addEventListener("click", function(e ){
	
e.preventDefault();
var width = inputWidth.value;
var height = inputHeight.value;


// Select size input
makeGrid(width, height);

});


// When size is submitted by the user, call makeGrid()

function makeGrid(width, height) {

canvas.innerHTML = "";

for(var i = 0; i < height; i++) {
var row = canvas.insertRow();
for (var j = 0; j < width; j++){
var cell = row.insertCell();
}
}

canvas.addEventListener('click', setColor);

}


// Select color input

function setColor(event) {
	
        event.target.setAttribute('style', 'background-color: ' + colorPicker.value);
    }


