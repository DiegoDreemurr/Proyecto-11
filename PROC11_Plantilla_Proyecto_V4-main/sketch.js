var barco
var barcoImg
var mar
var marImg

function preload(){
barcoImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
marImg = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  mar = createSprite(400,200);
  mar.addImage(marImg);
  mar.velocityX = -2
  barco = createSprite (130,200,30,30);
  barco.addAnimation("barco",barcoImg);
  barco.scale = 0.5;
}

function draw() {
  background("blue");
 drawSprites()
}