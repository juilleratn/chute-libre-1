var cvs=document.getElementById('macanvas');   
var ctx= cvs.getContext('2d');
var bouton=document.getElementById('bouton'); 
var $pigeon=document.getElementById('pigeon');
$pigeon.classList.add('disparition');
ctx.fillStyle = "red";
//dessiner le ballon
var posX = 100;
var posY = 1200;
var vitesseY = -8;
var vitesseYauto=1;
var compteur=0;

var bg = new Image();
var max= new Image();
var pigeon1 = new Image();
var pigeon2 = new Image();
var aigle1 = new Image();
var aigle2 = new Image();
var vautour = new Image();
var spectre = new Image();
var corbeau = new Image();
bg.src = "images/background.png";
max.src = "images/max.gif";
pigeon1.src = "images/pigeon1.gif";
pigeon2.src = "images/pigeon2.gif";
aigle1.src = "images/aigle1.gif";
aigle2.src = "images/eagle2.gif";
corbeau.src = "images/corbeau.gif";
vautour.src = "images/vautour.gif";
spectre.src = "images/ghost.gif";

function draw(){
	ctx.drawImage(bg, 0, 0);
	ctx.drawImage(max, posX, posY);
	ctx.drawImage(pigeon1, 250, 1000);
	ctx.drawImage(pigeon2, 50, 800);
	ctx.drawImage(aigle1, 200, 900);
	ctx.drawImage(aigle2, 30, 600);
	ctx.drawImage(corbeau, 300, 700);
	ctx.drawImage(vautour, 150, 400);
	ctx.drawImage(spectre, 20, 700)	;
	}
	draw();
function animate1(){
	if(posY>1){
		ctx.clearRect(0, 0, cvs.width, cvs.height);
		posY += vitesseY;
		ctx.drawImage(pigeon1, 250, 200);
		ctx.drawImage(bg, 0, 0);
		ctx.drawImage(max, posX, posY);
	}
	if(compteur==0){
	var myInterval = setInterval(animate2, 1000/30);
	}
	}

bouton.addEventListener('click', animate1);

	function animate2(){
		if(posY<cvs.height-1){
		ctx.clearRect(0, 0, cvs.width, cvs.height);
		posY += vitesseYauto
		compteur++
		ctx.drawImage(bg, 0, 0);
		ctx.drawImage(max, posX, posY);
		}else {
			ctx.clearRect(0, 0, cvs.width, cvs.height);
			ctx.font = '48px Comic Sans MS';
	  		ctx.fillText('GAME OVER', 50, 350);
		}
		BonusPigeon1();
		BonusPigeon2();
		BonusAigle1();
		BonusAigle2();
		Maluscorbeau();
		MalusVautour();
		MalusSpectre();
		}
	function BonusPigeon1(){
		if((posY>270)&&(posY<310)){
			ctx.drawImage(pigeon1, 350, 290);
			$pigeon.classList.remove('disparition');console.log("hi");
			}else if((posY>1080)&&(posY<1120)){
			ctx.drawImage(pigeon1, 150, 1100);
			$pigeon.classList.remove('disparition');
			}else{
			$pigeon.classList.add('disparition');
			}
		}
	function BonusPigeon2(){
			if((posY>330)&&(posY<370)){
			ctx.drawImage(pigeon2, 350, 350);
			$pigeon.classList.remove('disparition');console.log("hi");
			}else if((posY>780)&&(posY<820)){
			ctx.drawImage(pigeon2, 50, 800);
			$pigeon.classList.remove('disparition');
			}else{
			$pigeon.classList.add('disparition');
			}
			}
	function BonusAigle1(){
		if((posY>130)&&(posY<170)){
			ctx.drawImage(aigle1, 175, 150);
			$pigeon.classList.remove('disparition');
			}else if((posY>880)&&(posY<920)){
			ctx.drawImage(aigle1, 200, 900);
			$pigeon.classList.remove('disparition');
			}else{
			$pigeon.classList.add('disparition');
			}
			}
	function BonusAigle2(){
		if((posY>130)&&(posY<170)){
			ctx.drawImage(aigle2, 175, 150);
			$pigeon.classList.remove('disparition');
			}else if((posY>880)&&(posY<920)){
			ctx.drawImage(aigle2, 30, 900);
			$pigeon.classList.remove('disparition');
			}else{
			$pigeon.classList.add('disparition');
			}
			}
	function MalusVautour(){
		if((posY>130)&&(posY<170)){
			ctx.drawImage(vautour, 200, 300);
			$pigeon.classList.remove('disparition');
			}else if((posY>980)&&(posY<1020)){
			ctx.drawImage(vautour, 70, 1000);
			$pigeon.classList.remove('disparition');
			}else{
			$pigeon.classList.add('disparition');
			}
			}
	function Maluscorbeau(){
		if((posY>130)&&(posY<170)){
			ctx.drawImage(corbeau, 45, 400);
			$pigeon.classList.remove('disparition');console.log("hi");
			}else if((posY>980)&&(posY<1020)){
			ctx.drawImage(corbeau, 45, 850);
			$pigeon.classList.remove('disparition');
			}else{
			$pigeon.classList.add('disparition');
			}
			}
	function MalusSpectre(){
		if((posY>130)&&(posY<170)){
			ctx.drawImage(spectre, 150, 250);
			$pigeon.classList.remove('disparition');
			}else if((posY>980)&&(posY<1020)){
			ctx.drawImage(spectre, 200, 750);
			$pigeon.classList.remove('disparition');
			}else{
			$pigeon.classList.add('disparition');
			}
			}

