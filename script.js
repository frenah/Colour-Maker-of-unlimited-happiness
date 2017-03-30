/* Exercise 2: Color picker */

//Creates random values for r,g,b to be used when the page loads
var r = Math.floor(Math.random()*255);
var g = Math.floor(Math.random()*255);
var b = Math.floor(Math.random()*255);

//makes rgb random again
function randomRGB() {						
	$("#r").val(Math.floor(Math.random()*255));
	$("#g").val(Math.floor(Math.random()*255));
	$("#b").val(Math.floor(Math.random()*255));
}

//Sets the preview color to the randomly generated color on load (along with the input fields)
$(document).ready(function() {
	$("#r").val(r);
	$("#g").val(g);
	$("#b").val(b);
	$(".preview").css("background-color", "rgb(" + r + "," + g + "," + b + ")");
	var RGB = $(".preview").css("background-color");
	$(".color-code").text(RGB);
});

//Function that sets the prievew color based on input
function setPreviewColor(r, b, g) {
	var r = $("#r").val();
	var g = $("#g").val();
	var b = $("#b").val();
	$(".preview").css("background-color", "rgb(" + r + "," + g + "," + b + ")");
	var RGB = $(".preview").css("background-color");
	$(".color-code").text(RGB);
}

//Prepends the color box from preview to a selection created by the user
function addBox() {
	$("#colors").prepend('<div class="item" style="background-color: ' + $(".preview").css("background-color") + ';"></div>')
}

//On click of add to favourites, this adds to favourites and randomises the next preview color
$(document).on("click", "#add-to-favorite", function() {
	addBox();
//places the cursor back on to the r input field
	$("#r").focus();
	randomRGB();
	setPreviewColor();
//Limits the amount of colors that can bisplayed to 16
	if ($("#colors .item").length>16) {
	$("#colors .item").last().remove();
}})

//Sets the priview color when letting go of a key
$(document).on("keyup", ".color", function() {
//Limits the input field to just numbers
	setPreviewColor();
    var chosenNumber = Number($(this).val());
	if (isNaN(chosenNumber))	{$(this).val("255");}
    if (chosenNumber > 255)		{$(this).val("255");}
	if (chosenNumber < 0)		{$(this).val("0");}
});

//Function that's used to set the preview color to the color of a favourite mouse over color
function setPreviewColorSpecial(color) {			
	$(".preview").css("background-color", color);
	var RGB = $(".preview").css("background-color");
	$(".color-code").text(RGB);
}

//Changes the preview color to the one the mouse is over and then sets it back after (how kind of it)
$(document).on("mouseenter", ".item", function() {
	var previewColorStore = $(".preview").css("background-color");
	setPreviewColorSpecial($(this).css("background-color"));
		$(document).on("mouseleave", ".item", function() {
		setPreviewColor(previewColorStore);		
	})
})













