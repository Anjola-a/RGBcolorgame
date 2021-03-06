var numSqaures=6;
var colors = generateRandomColors(numSqaures);

var pickedColor= pickColor();
var colorDisplay=document.getElementById("colorDisplay");
colorDisplay.textContent=pickedColor;
var messageDisplay=document.getElementById("message");
var h1=document.querySelector("h1");
var squares=document.querySelectorAll(".square");

var reset=document.getElementById("reset");
var modeButt=document.querySelectorAll(".mode")
var streak=document.getElementById("streak");
var streaknum=0;
var chance=0;


for (var i = 0; i< modeButt.length; i++) {
	modeButt[i].addEventListener("click", function(){
		modeButt[0].classList.remove("selected");
		modeButt[1].classList.remove("selected");
		this.classList.add("selected");
		if (this.textContent==="easy"){
			numSqaures=3;

		}else{
			numSqaures=6;
		}
		again();

	})
}

function again(){
	//generate random colors
	colors = generateRandomColors(numSqaures);
	pickedColor= pickColor();
	colorDisplay.textContent=pickedColor;
	reset.textContent="New Colours";
	messageDisplay.textContent="";

	for (var i = 0; i< squares.length; i++) {
		if(colors[i]){
			squares[i].style.backgroundColor=colors[i];
			squares[i].style.display="block";
		}else{
			squares[i].style.display="none";
		}
		
	}

	h1.style.backgroundColor= "#e6566c";
	


}


reset.addEventListener("click", function(){
	chance=0;
	again();

})

for (var i = 0; i< squares.length; i++) {
	squares[i].style.backgroundColor=colors[i];
	//

	squares[i].addEventListener("click", function(){
		chance+=1;
		console.log(chance);
		var clickedColor=this.style.backgroundColor;
		if (clickedColor===pickedColor){
			// alert("correct!");
			messageDisplay.textContent="correct";
			changeColors(clickedColor);
			h1.style.backgroundColor=clickedColor;
			reset.textContent="Play Again?";
			if (chance==1){
				streaknum+=1;
				if (streaknum>=3){
				streak.innerHTML= "<span> streak: "+streaknum +"<span><i class='fa fa-fire'></i></span></span>";
				
				}

			}
			

		}else{
			this.style.backgroundColor="#232323";
			messageDisplay.textContent="Try Again";
			streaknum=0;
		}
	})

}
//when they win change all colors to the winning color
function changeColors(color){
	for (var i = 0; i< squares.length; i++) {
	squares[i].style.backgroundColor=color;
	}
}
function pickColor(){
	//helps pick the answer to guess
	var random=Math.floor(Math.random()*colors.length)
	return colors[random];
}

function generateRandomColors(num){
	var arr=[]
	for (var i = 0; i< num; i++) {
		//get random colour and push into array
		arr.push(randomColor());

	}

	return arr;
}


function randomColor(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	// "rgb(r, g, b)"
	return "rgb("+ r +", "+ g +", "+ b +")"


}
