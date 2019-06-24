var cvs=document.getElementById('macanvas');   
var ctx= cvs.getContext('2d');
var bouton=document.getElementById('bouton'); 
var $Pigeon=document.getElementById('Pigeon');
$Pigeon.classList.add('disparition');
ctx.fillStyle = "red";
var Pigeon2 = document.getElementById('Pigeon2');
var Aigle1 =document.getElementById('Aigle1');
var Aigle2 =document.getElementById('Aigle2');
var Vautour =document.getElementById('Vautour');
var Corbeau =document.getElementById('Corbeau');
var Spectre =document.getElementById('Spectre');
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
		/*ctx.beginPath();*/
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
			$Pigeon.classList.remove('disparition');
			}else if((posY>1080)&&(posY<1120)){
			ctx.drawImage(pigeon1, 150, 1100);
			$Pigeon.classList.remove('disparition');
			}else{
			$Pigeon.classList.add('disparition');
			}
		}
	function BonusPigeon2(){
			if((posY>330)&&(posY<370)){
			ctx.drawImage(pigeon2, 350, 350);
			Pigeon2.classList.remove('disparition');
			}else if((posY>780)&&(posY<820)){
			ctx.drawImage(pigeon2, 50, 800);
			Pigeon2.classList.remove('disparition');
			}else{
			Pigeon2.classList.add('disparition');
			}
			}
	function BonusAigle1(){
		if((posY>130)&&(posY<170)){
			ctx.drawImage(aigle1, 175, 150);
			Aigle1.classList.remove('disparition');
			}else if((posY>880)&&(posY<920)){
			ctx.drawImage(aigle1, 200, 900);
			Aigle1.classList.remove('disparition');
			}else{
			Aigle1.classList.add('disparition');
			}
			}
	function BonusAigle2(){
		if((posY>130)&&(posY<170)){
			ctx.drawImage(aigle2, 175, 150);
			Aigle2.classList.remove('disparition');
			}else if((posY>880)&&(posY<920)){
			ctx.drawImage(aigle2, 30, 900);
			Aigle2.classList.remove('disparition');
			}else{
			Aigle2.classList.add('disparition');
			}
			}
	function MalusVautour(){
		if((posY>130)&&(posY<170)){
			ctx.drawImage(vautour, 200, 300);
			Vautour.classList.remove('disparition');
			}else if((posY>980)&&(posY<1020)){
			ctx.drawImage(vautour, 70, 1000);
			Vautour.classList.remove('disparition');
			}else{
			Vautour.classList.add('disparition');
			}
			}
	function Maluscorbeau(){
		if((posY>130)&&(posY<170)){
			ctx.drawImage(corbeau, 45, 400);
			Corbeau.classList.remove('disparition');console.log("hi");
			}else if((posY>980)&&(posY<1020)){
			ctx.drawImage(corbeau, 45, 850);
			Corbeau.classList.remove('disparition');
			}else{
			Corbeau.classList.add('disparition');
			}
			}
	function MalusSpectre(){
		if((posY>130)&&(posY<170)){
			ctx.drawImage(spectre, 150, 250);
			Spectre.classList.remove('disparition');
			}else if((posY>980)&&(posY<1020)){
			ctx.drawImage(spectre, 200, 750);
			Spectre.classList.remove('disparition');
			}else{
			Spectre.classList.add('disparition');
			}
		}
//------------------------------------------------------------------
	function pigeon1 (){//gain de souvenirs
		souvenirs = souvenirs + gainP;
		Souvenirs.innerHTML = souvenirs;
		}