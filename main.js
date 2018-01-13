//////////////////////////////////////////////
// Index file page

// Function 1
function set_text(){
	var oldText = document.getElementById('textOne');
	var newText = "I'm right!";
	oldText.innerText = newText;
}



// Function 2
// This function changes the text that is on the button
// function set_text2(){
// 	var textOld = document.getElementById("secText");
// 	textOld.innerHTML = "No, I'm right!";
// }



// Function 3
// This function changes the same text that Function number one changes
function set_text2(){
	var vijoText = document.getElementById('textOne');
	var newerText = "No I'm right!";
	vijoText.innerText = newerText;

}



///////////////////////////////////////////////
// // hover-element page

// //function 1
var boxText = document.getElementById("box");

boxText.addEventListener('mouseenter', function(event){
	alert('Hey, I told you not to hover over me!')
})


////////////////////////////////////
//The volume of a Sphere
////function 1

function volumeOfSphere(){
	var inputRad = document.querySelector('input[name = radius]').value;
	var radius = Math.pow(inputRad, 3);
	var volume = (4/3) * Math.PI * radius; 
	console.log(volume);
	alert("The volume of a sphere with a radius of " + inputRad + " " + "is " + volume);

}
