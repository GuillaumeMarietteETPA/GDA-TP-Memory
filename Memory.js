var config = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
scene: {
		preload: preload,
		create: create,
		update: update
	}
};



var game = new Phaser.Game(config);

	var carte 1;
	var carte 2;

	var paire 1 = 0;



function preload(){
	
	//ICI charger les images des cartes
	
}


function create(){
	
	//Créer cartes
	//ajouter fonction random pour les mélanger
	
	
	
}

function update(){
	
	//Si on clique sur carte 1 
		// alors -> paire 1 += 1;
		
		
	//Si on clique sur carte 2
		// alors -> paire 1 += 1;
	
}