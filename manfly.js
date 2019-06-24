
var $falaise=document.getElementById('falaise');
var $container=document.getElementById('container');
var $man=document.getElementById('man');
var $bouton=document.getElementById('Bouton');

var $compteur1=0;
$falaise.classList.add('falaise');
function debutjeu(){
  if($compteur1==0){
  $container.classList.add('debutcontainer');
  $falaise.classList.add('debutfalaise');
  }
  
    
  
compteur1=0;
}
$container.addEventListener('click', debutjeu);





function monter() {
    
   //for(i=0; i<2;i++) {
    if (i==0) {
        	i=i+1
        	console.log(flytime)
        	$man.classList.add('clickman');
    } else {
        
        clearInterval(intervalId);
        console.log(flytime)
        $man.classList.remove('clickman');
        flytime=0
        
    }
    //}
}




// Appelle la fonction diminuerCompteur toutes les secondes (1000 millisecondes)
var intervalId = setInterval(monter, 1000);
$bouton.addEventListener('click', monter);
var score = 300;
var alt= document.getElementById('Altitude');
var compteur = 1;
var gainP = 5;
var gainA = 20;
var bo =document.getElementById('Boost')
var cout = 20;
var auto = 0;
var souvenirs = 0;
var perteS = 10;

//var waou = new Audio('car_horn.wav');
//waou.play();

//clic pour voler	___________________________________
	function vol() {
		score = score + compteur;
		alt.innerHTML = score;
	}
//bonus apres avoir attraper un "pigeon"/aigle/et caetera------------------------------
	function pigeon1 (){//gain de souvenirs
		souvenirs = souvenirs + gainP;
		Souvenirs.innerHTML = souvenirs;
	}
	function pigeon2 (){//gain  multi
		compteur++;
		//Bonus_malus.innerHTML = compteur;
	}
	function aigle1 (){//gain de souvenirs
		souvenirs = souvenirs + gainA;
		Souvenirs.innerHTML = souvenirs;
	}
	function aigle2 (){//gain multi
		compteur= compteur + 2;
		//Bonus_malus.innerHTML = compteur;
	}
//malus apres avoir attraper un spectre/corbeau/vautour---------------------------------

	function spectre(){//perte de tous les  souvenirs et multi
		souvenirs = 0;
		Souvenirs.innerHTML = souvenirs;
		auto = 0;
		if(compteur >1){
		compteur = 1;
		}
		//Bonus_malus.innerHTML = compteur ;
	}//tres mechant----
	function vautour(){ //perte de 1 multi
		if(compteur >1){
		compteur--;
		}
		//Bonus_malus.innerHTML = compteur ;
	}
	function corbeau(){// perte de souvenirs
		Souvenirs.innerHTML = souvenirs;
		souvenirs = souvenirs - perteS;
		
	}
		
		//multi.value=("Pigeon X"+compteur+"!!!!!  "+prixP+" souvenirs!!");
	
// boost() et inter() sont des fonctions equipement pour clic automatique-----------------------
	function boost(){
		score++;
		alt.innerHTML = score;
	}

	function inter(){

	 	if(souvenirs >= cout){
	 	setInterval("boost()",1000);
	 	souvenirs= souvenirs-cout;
	 	cout=cout*2;
	 	console.log(cout);
	 	auto++;
	 	}else{
			alert("Pas assez de souvenirs ! ")
	 	}
	 	bo.value=("boost "+auto+"m/sec "+cout+" souvenirs!!");
	}
	//perte d'altitude automatique----------------------------------------------
	function chute(){
		score--;
		alt.innerHTML = score;
	}
	function descente(){
		setInterval("chute()",500);
	}
	