var numSquares=6;
var color=generateRandomColors(numSquares);
var colorAllocation=document.querySelectorAll(".square");

var pickedColor=randomColors(6);
var colorDisplay=document.getElementById("colorDisplay");
var message=document.getElementById("displayMessage");
var gameVower=document.getElementById("gameOver");
var resetButton=document.getElementById("reset");
colorDisplay.textContent=pickedColor;
var easyBtn=document.getElementById("easy");
var hardBtn=document.getElementById("hard");

for( var i=0; i < colorAllocation.length; i++){
	//adding colors to the squares
	colorAllocation[i].style.backgroundColor=color[i];
	
	//adding click listeners to squares
	colorAllocation[i].addEventListener("click", function(){
		var clickedColor=this.style.backgroundColor;
		if(clickedColor===pickedColor){
			message.textContent="Correct";
			changeColors(clickedColor);
			resetButton.textContent="RESET"
		}else{
			this.style.background="black";
			message.textContent="Try again";
			
		}
	});
}

function changeColors(col){
	for(i=0;i<colorAllocation.length;i++){
		colorAllocation[i].style.background=col;
	}
}

function randomColors(){
	var random=Math.floor(Math.random()*color.length);
	return color[random];
}

function generateRandomColors(num){
	 
	var arr=[];
	for(i=0;i<num;i++){
		arr.push(generateColors());
	}
	return arr;
}

function generateColors(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";
}

resetButton.addEventListener("click", function(){
	color=generateRandomColors(numSquares);
	pickedColor=randomColors(6);
	colorDisplay.textContent=pickedColor;
	for(i=0;i<colorAllocation.length;i++){
		colorAllocation[i].style.backgroundColor=color[i];
	}
	message.textContent="";
	resetButton.textContent="New Colors"
});

easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares=3;
	color=generateRandomColors(numSquares);
	pickedColor=randomColors();
	colorDisplay.textContent=pickedColor;
	for(var i=0; i<colorAllocation.length;i++){
		if(color[i]){
			colorAllocation[i].style.background=color[i];
		}else{
			colorAllocation[i].style.display="none";
		}
	}
});

hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares=6;
	color=generateRandomColors(numSquares);
	pickedColor=randomColors();
	colorDisplay.textContent=pickedColor;
	for(var i=0; i<colorAllocation.length;i++){
		
			colorAllocation[i].style.background=color[i];
		
			colorAllocation[i].style.display="block";
		
	}
});
