var player;
var game;
var xMax;
var xMin;

$("#startButton").click(function(){
	$("#start").hide();
	$("#game").show();
	document.addEventListener('keydown', keyPresses);
	player = document.getElementById("player");
	game = document.getElementById("game");
	game.style.width = document.body.clientWidth * 0.8 + "px";
	game.style.height = getDocHeight() * 0.8 + "px";
	xMax = game.style.width.split("px")[0] * 0.8;
	xMin = 0;
	player.style.left = "0px";
	console.log(getDocHeight()*0.8)
	player.style.top = getDocHeight() * 0.65 + "px";
});

function keyPresses(event)
{
	if(event.keyCode === 37) 
	  {
	  	var xPos = player.style.left.split("px")[0]
	  	console.log(xPos)
	  	if(xPos > xMin){
	  		player.style.left = xPos - 50 + "px";
	  	}
	  }
	else if(event.keyCode === 39) 
	  {
	  	var xPos = player.style.left.split("px")[0]
	  	console.log(xPos)
	  	if(xPos < xMax){
	  		player.style.left = xPos - 0 + 50 + "px";
	  	}
	  }
}

function getDocHeight() {
    var D = document;
    return Math.max(
        D.body.scrollHeight, D.documentElement.scrollHeight,
        D.body.offsetHeight, D.documentElement.offsetHeight,
        D.body.clientHeight, D.documentElement.clientHeight
    );
}