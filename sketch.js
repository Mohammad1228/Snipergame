var player;
var enemy;
var edges = []
var bulletg
var bullet2g
var crownCounter = 0
var kills = 0;

function preload(){

}

function setup() {
  createCanvas(800,800);
  
  crown1 = createSprite(100,100,20,20);
  crown1.shapeColor ="yellow";
  crown2 = createSprite(650,100,20,20);
  crown2.shapeColor = "yellow";
  crown3 = createSprite(750,550,20,20);
  crown3.shapeColor = "yellow";


  // creating the maze

  CreateWall();

  //characters
  player = new Player();
  enemy1 = new Enemy(220,150);
  enemy2 = new Enemy(530,550);
 //bullets
  bulletg = new Group;
  bullet2g = new Group;


}




function draw() {
  background(0);  
 
  
  player.move();
  

  //colliding characters with walls
  bounceOffWall(player.body);

  bounceOffWall(enemy1.body); 
  bounceOffWall(enemy2.body);

  attack(enemy1);
  attack(enemy2);

  attackk(enemy1);
  attackk(enemy2);
  
  score(crown1);
  score(crown2);
 
  player.spawnBulletss();
 
 
 
 
  drawSprites();
  text("Enemies killed: "+kills,500,700);
}

function mouseClicked(){
  player.spawnBullets();

}




