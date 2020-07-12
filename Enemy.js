class Enemy{
constructor(x,y){
    this.body = createSprite(x,y,20,20);
    this.body.shapeColor = "red";
    this.health = 99;
    this.body.velocityX = -3;
    this.body.velocityY = -3;
    }


    
}