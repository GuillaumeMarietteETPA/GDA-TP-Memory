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

	var carte1;
	var carte2;
	
	var paire1 = 0;
	
	var win = 0;
	var wintext;




function preload(){
	
	this.load.image('backcard','assets/cardBack_blue5.png');
	
	this.load.image('carteAC','assets/cardHeartsA.png');
	this.load.image('carte2C','assets/cardHearts2.png');
	this.load.image('carte5C','assets/cardHearts5.png');
	this.load.image('carte7C','assets/cardHearts7.png');
	this.load.image('carte10C','assets/cardHearts10.png');
	this.load.image('carteQC','assets/cardHeartsQ.png');
	
	
	//ICI charger les images des cartes
}


function create(){
	
	this.back1 = this.add.image(250, 190,'backcard').setScale(.5).setInteractive();
	this.back2 = this.add.image(250, 300,'backcard').setScale(.5).setInteractive();
	this.back3 = this.add.image(250, 410,'backcard').setScale(.5).setInteractive();
	this.back4 = this.add.image(350, 190,'backcard').setScale(.5).setInteractive();
	this.back5 = this.add.image(350, 300,'backcard').setScale(.5).setInteractive();
	this.back6 = this.add.image(350, 410,'backcard').setScale(.5).setInteractive();
	this.back7 = this.add.image(450, 190,'backcard').setScale(.5).setInteractive();
	this.back8 = this.add.image(450, 300,'backcard').setScale(.5).setInteractive();
	this.back9 = this.add.image(450, 410,'backcard').setScale(.5).setInteractive();
	this.back10 = this.add.image(550, 190,'backcard').setScale(.5).setInteractive();
	this.back11 = this.add.image(550, 300,'backcard').setScale(.5).setInteractive();
	this.back12 = this.add.image(550, 410,'backcard').setScale(.5).setInteractive();
	
	this.back1.setInteractive();
	this.back1.on("pointerout",()=>{
			
		})
		this.back1.on("pointerdown",()=>{
			paire1 += 1;
			
			this.add.image(250, 190,'carteAC').setScale(.5);
		})
	
	this.back4.setInteractive();
	this.back4.on("pointerout",()=>{
			
		})
		this.back4.on("pointerdown",()=>{
			paire1 += 1;
			this.add.image(350, 190,'carteAC').setScale(.5);
		})
	
	/*this.back8.setInteractive();
	this.back8.on("pointerout",()=>{
			
		})
		this.back8.on("pointerdown",()=>{
			paire1 += 1;
			this.add.image(450, 300,'carte5C').setScale(.5);
		})*/
	
	
	
	
	
	
	
	
	
	//Créer cartes
	//ajouter fonction random pour les mélanger
	
}

function update(){
	
	if (paire1 = 2){
		win += 1;
	}
	
	if (win = 1){
		wintext = this.add.text(320, 50, 'Vous gagnez !', {fontSize: '20px', fill:'#FFF'});
	}
	
	
	
	
	//Si on clique sur carte 1 
		// alors -> paire 1 += 1;
		
		
	//Si on clique sur carte 2
		// alors -> paire 1 += 1;
	
}