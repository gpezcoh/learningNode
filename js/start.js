var testPlayer = new Player();
var laserArray = [];
var game;
var xMax;
var xMin;

$("#startButton").click(function(){
	$("#start").hide();
	document.getElementById("container").style.backgroundColor = "white";
	$("#game").show();
	document.addEventListener('keydown', keyPresses);
	player = document.getElementById("player");
	game = document.getElementById("game");
	game.style.width = document.body.clientWidth * 0.8 + "px";
	game.style.height = getDocHeight() * 0.8 + "px";
	xMax = game.style.width.split("px")[0] - 125;
	xMin = 25;
	player.style.left = xMax * 0.5 + "px";
	player.style.top = getDocHeight() * 0.65 + "px";
	createLasers();
});

function keyPresses(event){
	if(event.keyCode === 37) 
	{
		var xPos = player.style.left.split("px")[0]
		if(xPos > xMin){
			player.style.left = xPos - 50 + "px";
		}
	}
	else if(event.keyCode === 39) 
	{
		var xPos = player.style.left.split("px")[0]
		if(xPos < xMax){
			player.style.left = xPos - 0 + 50 + "px";
		}
	}
	else if(event.keyCode === 32) 
	{
		shootLasers();
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