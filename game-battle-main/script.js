
var bottomRow = document.getElementById('bottomRow');
var stats = document.getElementsByClassName('stats');
var teoStats = document.getElementById('teoStats');
var teoManHP = document.getElementById('teoManHP');
var veigHP = document.getElementById('veigHP');
var teoMoves = document.getElementById('teoMoves');
var attack = document.getElementById('attack');

var teoHP = 100;
var veigarHP = 100;
function beginBattle(){
	for (var x=0; x<stats.length; x++){
		stats[x].style.visibility = "visible";
	}
	// battleMusic.play();
	battleMusic.volume = 0.5;
}

function mute(){
	if (state == "off"){
		state = "on";
		musicControls.innerHTML = "<img src='https://www.pinclipart.com/picdir/big/13-133213_big-image-mute-and-unmute-icon-clipart.png'  onclick=\"mute();\">";
		battleMusic.play();
	} else{
		state = "off";
		musicControls.innerHTML = "<img src='https://www.pinclipart.com/picdir/big/351-3512014_big-image-sound-on-off-button-clipart.png' onclick=\"mute();\">";
		battleMusic.pause();
	}
}

function veigAttack(){
	var attackChoice = Math.ceil(Math.random()*3);
	if (attackChoice == 1){
		var hitChance = Math.round(Math.random()*10);
		if (hitChance <=7){
			var dmg = Math.round(Math.random()*10)+10;
		teoHP -= dmg;
			if (teoHP < 0){
				teoHP = 0;
			}
			var teoaHPBarWidth = (teoHP/100)*300;
			teoaManHP.style.width = teoHPBarWidth + "px";
		} else {
			bottomRow.innerHTML += "<br>Veigar missed!";
		}
	} else if (attackChoice == 2){
		var hitChance = Math.round(Math.random()*10);
		if (hitChance <=5){
			var dmg = Math.round(Math.random()*15)+15;
			teoHP -= dmg;
			if (teoHP < 0){
				teoHP = 0;
			}
			bottomRow.innerHTML += "<br>Slime hit with you a basic Blast, doing " + dmg + " damage. You now have " + megaHP + "hp.";
			var teoHPBarWidth = (teoHP/100)*300;
			teoManHP.style.width = teoHPBarWidth + "px";
		} else {
			bottomRow.innerHTML += "<br>Slime missed!";
		}
	} else {
		var hitChance = Math.round(Math.random()*10);
		if (hitChance <=3){
			var dmg = Math.round(Math.random()*10)+20;
			teoHP -= dmg;
			if (teoHP < 0){
				teoHP = 0;
			}
			bottomRow.innerHTML += "<br>Slime hit with you a basic Blast, doing " + dmg + " damage. You now have " + megaHP + "hp.";
			var teoHPBarWidth = (teoHP/100)*300;
			teoManHP.style.width = teoHPBarWidth + "px";
		} else {
			bottomRow.innerHTML += "<br>Slime missed!";
		}
	}
	if (teoHP == 0){
		bottomRow.innerHTML += "<br><button onclick='restartGame()'>START</button>";
		teovMoves.style.visibility = "hidden";
	}

}

function blast(){
	setTimeout(function() { attack.innerHTML= ""; }, 500);
	var hitChance = Math.round(Math.random()*10);
	if (hitChance <=7){
		var dmg = Math.round(Math.random()*10)+10;
		veigarHP -= dmg;
		if (veigarHP < 0){
			veigarHP = 0;
		}
		bottomRow.innerHTML = "You hit Battle Boss Veigar with your blast, doing " + dmg + " damage. Veigar now has " + veigarHP + "hp.";
		var veigHPBarWidth = (veigarHP/100)*300;
		veigHP.style.width = veigHPBarWidth + "px";
	} else {
		bottomRow.innerHTML = "You missed!";
	}
	if (veigarHP == 0){
		bottomRow.innerHTML += "<br><br><button onclick='restartGame()'>START</button>";
		teoMoves.style.visibility = "hidden";
	} else {
		veigAttack()
	}
}

function restartGame(){
	veigarHP = 100;
	teoHP = 100;
	var teoHPBarWidth = (teoHP/100)*300;
	teoManHP.style.width = teoHPBarWidth + "px";
	var veigHPBarWidth = (veigarHP/100)*300;
	veigHP.style.width = veigHPBarWidth + "px";
	teoMoves.style.visibility = "visible";
	beginBattle();
}
