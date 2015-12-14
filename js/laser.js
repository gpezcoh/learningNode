function Laser(number,div){
	this.available = 1;
	this.number = number;
	this.correspondingDiv = div;
	this.interval;
}

function createLasers(){
	for(var i = 0; i < testPlayer.ammo; ++i){
		var testLaser = document.createElement("div");
		testLaser.className = "laser";
		testLaser.id = "laser" + i;
		game.appendChild(testLaser);
		laserArray.push(new Laser(i,testLaser));
	}
	testPlayer.availableLasers = laserArray;
}