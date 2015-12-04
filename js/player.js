function Player(){
	this.ammo = 3;
	this.availableLasers = [];
}

function shootLasers(){
	if(testPlayer.availableLasers.length > 0){
		shootLaser(testPlayer.availableLasers[0]);
	}
}

function shootLaser(laser){
	console.log(player.style.top)
	laser.correspondingDiv.style.top = player.style.top.split("px")[0] - 50 + "px";
	laser.correspondingDiv.style.left = player.style.left.split("px")[0] - 0 + 50 + "px";
	$("" + laser.correspondingDiv.id).show();
}