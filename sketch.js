var cat, cat_moving, cat_stoped, cat_collided;
var mouse, mouse_teasing, mouse_stoped, mouse_final;
var bgImg;

function preload() {
    
    bgImg = loadImage("images/garden.png");
    cat_stoped = loadImage("images/cat1.png");
    cat_moving = loadImage("images/cat2.png","images/cat3.png");
    cat_collided = loadImage("images/cat4.png");
    mouse_teasing = loadImage("images/mouse2.png", "images/mouse3.png");
    mouse_final = loadImage("images/mouse4.png");

}

function setup(){
    createCanvas(1000, 800);
    
    cat = createSprite(870, 600);
    cat.addAnimation("catStoped", cat_stoped);
    cat.scale = 0.2;
    mouse = createSprite(400, 600);
    mouse.addAnimation("mouseStoped", mouse_stoped);
    
    
    
}

function draw() {

    background(225);
   
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        
        cat.velocityX = 0;
        cat.addAnimation("catCollided", cat_collided);
        cat.changeAnimation("catCollided");
        cat.x = 300;
        cat.scale = 0.2;

    }
    
    drawSprites();
}


function keyPressed(){

  if (keyCode === LEFT_ARROW){
    
    mouse.addAnimation("mouseTeasing", mouse_teasing);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay = 25;
  
    cat.velocityX = -5;
    cat.addAnimation("catMoving", cat_moving);
    cat.changeAnimation("catMoving");

  }

}
