var cvs=document.getElementById('macanvas');   
var ctx= cvs.getContext('2d');
var diametreBalle = 20;
var bouton=document.getElementById('bouton'); 
var $pigeon=document.getElementById('pigeon');
$pigeon.classList.add('disparition');
ctx.fillStyle = "red";
//dessiner le ballon
var posX = 100+diametreBalle/2;
var posY = 500+diametreBalle/2;
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
bg.src = "background.png";
max.src = "images/max.gif";
pigeon1.src = "images/pigeon1.gif";
pigeon2.src = "images/pigeon2.gif";
aigle1.src = "images/aigle1.gif";
aigle2.src = "images/eagle2.gif";
corbeau.src = "images/corbeau.gif";
vautour.src = "images/vautour.gif";
spectre.src = "images/ghost.gif";


/*ctx.beginPath();
ctx.arc(posX, posY, diametreBalle/2, 0, Math.PI*2);
ctx.fill();*/

function draw(){
	/*ctx.beginPath();*/
	ctx.drawImage(bg, 0, 0);
	ctx.drawImage(pigeon1, 250, 290);
	ctx.drawImage(max, posX, posY);
}
draw();
function animate1(){
	if(posY>1){
		ctx.clearRect(0, 0, cvs.width, cvs.height);
		posY += vitesseY;
		ctx.drawImage(pigeon1, 250, 200);
		ctx.drawImage(bg, 0, 0);
		ctx.drawImage(max, posX, posY);
		/*ctx.beginPath();
        ctx.arc(posX, posY, diametreBalle/2, 0, Math.PI*2);
        ctx.fill();*/
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

	/*ctx.beginPath();
        ctx.arc(posX, posY, diametreBalle/2, 0, Math.PI*2);
        ctx.fill();*/
      if((posY>270)&&(posY<390)){
		ctx.drawImage(pigeon1, 350, 290);
		$pigeon.classList.remove('disparition');
	}else if((posY>130)&&(posY<200)){
		ctx.drawImage(pigeon1, 150, 150);
		$pigeon.classList.remove('disparition');
	}else{
		$pigeon.classList.add('disparition');
	}
	
	}else {
		ctx.clearRect(0, 0, cvs.width, cvs.height);
		ctx.font = '48px Comic Sans MS';
		
  		ctx.fillText('GAME OVER', 50, 350);
	}

}