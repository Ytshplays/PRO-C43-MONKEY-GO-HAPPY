var backImage,backgr;
var player, player_running;
var ground,ground_img;

var END =0;
var PLAY =1;
var gameState = PLAY;
var banana, bananaImg
var stone, stoneImg

function preload(){
  backImage=loadImage("jungle.jpg");
  player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  bananaImg = loadImage ("banana.png")
  stoneImg = loadImage ("stone.png")
}

function setup() {
  createCanvas(800,400);
  
  backgr=createSprite(0,0,800,400);
  backgr.addImage(backImage);
  backgr.scale=1.5;
  backgr.x=backgr.width/2;
  backgr.velocityX=-4;
  
  player = createSprite(100,340,20,50);
  player.addAnimation("Running",player_running);
  player.scale = 0.1;
  
  ground = createSprite(400,350,800,10);
  ground.x=ground.width/2;
  ground.visible=false;


  
}

function draw() { 
  background(0);

  if(gameState===PLAY){
  
  if(backgr.x<100){
    backgr.x=backgr.width/2;
  }
  
    if(keyDown("space") ) {
      player.velocityY = -12;
    }
    player.velocityY = player.velocityY + 0.8;
  
    player.collide(ground);

  }

  drawSprites();

  spawnObstacles ();
}


function spawnObstacles() {
  if (frameCount % 60 === 0) {
    var stone = createSprite(600, 350, 10, 40);
    var banana = createSprite (600,250,10,40)
    stone.velocityX = -2
    banana.velocityX = -2
    banana.scale = 0.2
    stone.scale = 0.2
    //generate random stone
    var rand = Math.round(random(1, 2));
    switch (rand) {
      case 1:
        banana.addImage("banana.png",bananaImg);
        break;
      case 2:
        stone.addImage("stone.png",stoneImg);
        break;
    }
  }
}