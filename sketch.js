var fix,mov;
function setup() {
  createCanvas(800,400);
  fix=createSprite(300, 200, 50, 50);
  fix.shapeColor="green";
  mov=createSprite(400,200,80,30);
  mov.shapeColor="green";
}

function draw() {
  background(255,255,255); 
  mov.x=World.mouseX;
  mov.y=World.mouseY; 
  console.log(mov.x-fix.x);
  if(mov.x-fix.x<=mov.width/2 + fix.width/2 && fix.x-mov.x<=mov.width/2+fix.width/2 && mov.y-fix.y<=mov.height/2+fix.height/2 &&fix.y-mov.y<=mov.height/2+fix.height/2 ){
    fix.shapeColor="red";
    mov.shapeColor="red";
  }
  else{
    fix.shapeColor="green";
    mov.shapeColor="green";
  }
  drawSprites();
}