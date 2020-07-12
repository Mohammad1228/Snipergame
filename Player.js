class Player {
constructor(){
this.body = createSprite(130,550,20,20);
this.health = 99;

}
move(){
//up key
  if(keyDown(UP_ARROW)){
    this.body.y = this.body.y -5
  }
//down key
  if(keyDown("down")){
    this.body.y = this.body.y +5;
  }
//right key
  if(keyDown(RIGHT_ARROW)){
    this.body.x = this.body.x +5;
}
//left key
  if(keyDown(LEFT_ARROW)){
    this.body.x = this.body.x -5;
}


}

spawnBullets(){
var bullets = createSprite(this.body.x,this.body.y,5,5);
bullets.shapeColor = "blue";
bullets.velocityY = -5;
bulletg.add(bullets);

}
spawnBulletss(){
  if(keyDown("space")){
  var bullets2 = createSprite(this.body.x,this.body.y,5,5);
  bullets2.shapeColor = "green";
  bullets2.velocityY = -5;
  bullet2g.add(bullets2);
  }
  }
}



  
