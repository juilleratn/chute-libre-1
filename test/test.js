var cvs=document.getElementById('macanvas');   
var ctx= cvs.getContext('2d');

var bouton=document.getElementById('bouton'); 
var $pigeon=document.getElementById('pigeon');
$pigeon.classList.add('disparition');
ctx.fillStyle = "red";
//dessiner le ballon
var posX = 100;
var posY = 500;
var vitesseY = -8;
var vitesseYauto=3;
var compteur=0;
//var mon_image = new Image();
var mon_image1 = new Image();
var max1= new Image();
var max= new Image();
var imgfalaise= new Image();
//mon_image.src = "background.png";
mon_image1.src = "pigeon.png";
max.src = "maxvol.png";
max1.src = "maxchute.png";
imgfalaise.src="falaises.png";
/*ctx.beginPath();
ctx.arc(posX, posY, diametreBalle/2, 0, Math.PI*2);
ctx.fill();*/

function draw(){

	/*ctx.beginPath();*/
	//ctx.drawImage(mon_image, 0, 0);
	ctx.drawImage(mon_image1, 250, 290);
	ctx.drawImage(max, posX, posY);
		console.log("hello")

}
draw();
function animate1(){
	if(posY>1){
		ctx.clearRect(0, 0, cvs.width, cvs.height);
		//cvs.classList.remove("canvas");
		//cvs.classList.add("canvas1");
		posY += vitesseY;
		//ctx.drawImage(mon_image1, 250, 200);
		//ctx.drawImage(mon_image, 0, 0);
		ctx.drawImage(max, posX, posY);
		/*ctx.beginPath();
        ctx.arc(posX, posY, diametreBalle/2, 0, Math.PI*2);
        ctx.fill();*/
	}
	if(compteur==0){
	var myInterval = setInterval(animate2, 1000/10);
	}
}

bouton.addEventListener('click', animate1);
function animate2(){
	if(posY<cvs.height-80){
	ctx.clearRect(0, 0, cvs.width, cvs.height);
	cvs.classList.add("canvas");
	//cvs.classList.remove("canvas1");
	posY += vitesseYauto
	compteur++
	//ctx.drawImage(mon_image, 0, 0);
	ctx.drawImage(max1, posX, posY);
	ctx.drawImage(imgfalaise, 0, cvs.height-168)

	/*ctx.beginPath();
        ctx.arc(posX, posY, diametreBalle/2, 0, Math.PI*2);
        ctx.fill();*/
      if((posY>270)&&(posY<390)){
		ctx.drawImage(mon_image1, 350, 290);
		$pigeon.classList.remove('disparition');
	}else if((posY>130)&&(posY<200)){
		ctx.drawImage(mon_image1, 150, 150);
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