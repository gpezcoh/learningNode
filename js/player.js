function Player(){
	this.ammo = 3;
	this.availableLasers = [];
}

function shootLasers(){
	if(testPlayer.availableLasers.length > 0){
		shootLaser(testPlayer.availableLasers[0]);
		testPlayer.availableLasers.splice(0,1);
	}
}

function shootLaser(laser){
	laser.correspondingDiv.style.top = player.style.top.split("px")[0] - 50 + "px";
	laser.correspondingDiv.style.left = player.style.left.split("px")[0] - 0 + 50 + "px";
	$("#" + laser.correspondingDiv.id).show();
	console.log(laser.correspondingDiv.id)
	laser.interval = setInterval(function() {moveLaser(laser);},50);
	moveLaser(laser);
}

function moveLaser(laser){
	console.log("shooting")
	if(laser.correspondingDiv.style.top.split("px")[0] > -100){
		laser.correspondingDiv.style.top = laser.correspondingDiv.style.top.split("px")[0] - 10 + "px";
	}
	else{
		clearInterval(laser.interval);
		$("#" + laser.correspondingDiv.id).hide();
		testPlayer.availableLasers.push(laser);
	}
}