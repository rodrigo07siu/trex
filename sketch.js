
var trex ,trex_running;
var suelo;
function preload(){
trex_running =loadAnimation("trex1.png","trex3.png","trex4.png")  

}

function setup(){
  createCanvas(600,200)
  
  //crear sprite de Trex
trex = createSprite(50,160,20,50);
trex.addAnimation("running",trex_running);
trex.scale=0.5;
 suelo =createSprite(40,200,200,20);
}

function draw(){
  background("white")
  drawSprites();
if (keyDown("space")){
  trex.velocityY = -10;
}
trex.velocityY =trex.velocityY +0.5;
trex.collide(suelo);
}

