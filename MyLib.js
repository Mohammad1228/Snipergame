//creating the maze
function CreateWall(){
    wall1 = createSprite(80,510+3,5,170);
    wall2 = createSprite(55,430,45,5);
    wall3 = createSprite(35,330,5,200);
    wall4 = createSprite(35,230,140,5);
    wall5 = createSprite(180,530,5,145);
    wall6 = createSprite(250,460,145,5);
    wall7 = createSprite(320,530,5,145);

    wall8 = createSprite(250,65,5,125);
    wall9 = createSprite(250,125,125,5);
    wall10 = createSprite(190,150,5,60);
    wall11 = createSprite(220-3,183,60,20);
    wall12 = createSprite(320-5,225-3,5,200);
    wall13 = createSprite(275-7,325,100,5);
    wall14 = createSprite(220,375-10,5,75);
    wall15 = createSprite(275-7,405,100,5);
    wall16 = createSprite(275-7,325,100,5);
    wall17 = createSprite(320-5,380,5,50);
    wall18 = createSprite(395+5,375-20,175,5);
    wall19 = createSprite(490,395-3,50,80); 
    wall20 = createSprite(450,575,5,50);

    wall21 = createSprite(590,540,50,120);
    wall22 = createSprite(790,475,170,50);

    wall23 = createSprite(770,220,190,150);
    wall24 = createSprite(700,240,190,110);

    wall25 = createSprite(475,250,5,100);
    wall26 = createSprite(475,250,100,5);

    wall27 = createSprite(400,600,800,10);
    wall27.shapeColor= "white";

    


}
//colliding the characters with the walls
function bounceOffWall(sprite){
sprite.bounceOff(wall1);
sprite.bounceOff(wall2);
sprite.bounceOff(wall3);
sprite.bounceOff(wall4);
sprite.bounceOff(wall5);
sprite.bounceOff(wall6);
sprite.bounceOff(wall7);
sprite.bounceOff(wall8);
sprite.bounceOff(wall9);
sprite.bounceOff(wall10);
sprite.bounceOff(wall11);
sprite.bounceOff(wall12);
sprite.bounceOff(wall14);
sprite.bounceOff(wall15);
sprite.bounceOff(wall16);
sprite.bounceOff(wall17);
sprite.bounceOff(wall18);
sprite.bounceOff(wall19);
sprite.bounceOff(wall20);
sprite.bounceOff(wall21);
sprite.bounceOff(wall22);
sprite.bounceOff(wall23);
sprite.bounceOff(wall24);
sprite.bounceOff(wall25);
sprite.bounceOff(wall26);
sprite.bounceOff(wall27);

edges = createEdgeSprites();
sprite.bounceOff(edges[0])
sprite.bounceOff(edges[1])
sprite.bounceOff(edges[2])
sprite.bounceOff(edges[3])

}

function attack(E){
if(E.body!= null && bulletg.isTouching(E.body)){
    E.health = E.health - 33;
    
}
text(E.health,E.x,E.y-10);
if(E.health <0 && E.health > -33 ){
    E.body.destroy();
    kills = kills + 1
    console.log(kills);
}

//if(E.body == undefined && E.health ===-33){
  //  kills = kills +1;
//}

}



function attackk(R){
    if(R.body!= null && bullet2g.isTouching(R.body)){
        R.health = R.health - 33;
        
    }
    text(R.health,R.x,R.y-10);

if(R.health <0 ){
    R.body.destroy();


}
if(R.body == undefined && R.health ===-33){
    kills = kills +1;
}
}





function score(C){
if(player.body.isTouching(C)){
C.y = 695;
C.x = 180;
crownCounter = crownCounter+1;






}

textSize(20);
fill("blue");
text(crownCounter,150,700);
}