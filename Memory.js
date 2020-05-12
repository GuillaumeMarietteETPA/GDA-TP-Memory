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
	
	this.load.image('backcard','assets/cardBack_blue5.png');
	
	this.load.image('carteAP','assets/cardHeartsA.png');
	this.load.image('carte2P','assets/cardHearts2.png');
	this.load.image('carte5P','assets/cardHearts5.png');
	this.load.image('carte7P','assets/cardHearts7.png');
	this.load.image('carte10P','assets/cardHearts10.png');
	this.load.image('carteQP','assets/cardHeartsQ.png');
	
	this.load.image('carteAC','assets/cardSpadesA.png');
	this.load.image('carte2C','assets/cardSpades2.png');
	this.load.image('carte5C','assets/cardSpades5.png');
	this.load.image('carte7C','assets/cardSpades7.png');
	this.load.image('carte10C','assets/cardSpades10.png');
	this.load.image('carteQC','assets/cardSpadesQ.png');
	
	
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