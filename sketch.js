var canvas
var menu; 
var ply;
var back, ground, hurtBA, cristal;
var lifes = 5;
var gameState = 0;

function preload(){

 
}

function setup() {
   canvas = createCanvas(windowWidth, windowHeight)
   game = new Game();
   game.start();
   game.play();
   
   

}

 function draw() {
    background("black");
    console.log(height)  
   
    if(keyDown(LEFT_ARROW)){
      this.ply.positionX -= 5

    }
  
   if(gameState == 1){
    game.play();
   }
    
   if(gameState == 2){
     game.F1();
   }

   if(gameState == 3){
    game.F2();
  }

  if(gameState == 4){
    game.FB();
  }

  if(gameState == 5){
    game.lost();
  }  

  if(gameState == 6){
    game.Win();
  }
    drawSprites();
}


