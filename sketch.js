var fixedRect, movingRect;
var a,b,c;

function setup() 
{
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 50);
  fixedRect.shapeColor= "blue";
  movingRect= createSprite(200, 300, 50, 50);
  movingRect.shapeColor= "blue";
  fixedRect.velocityY = 4;
  movingRect.velocityY = -4;
 /* a= createSprite(300, 200, 50, 50);
  a.shapeColor= "blue";
  b= createSprite(400, 200, 50, 50);
  b.shapeColor= "blue";
  c= createSprite(500, 200, 50, 50);
  c.shapeColor= "blue";*/
}

function draw() 
{
  background("black");
 /* movingRect.x=mouseX;  
  movingRect.y=mouseY; 
 
  if(isTouching(movingRect,b))
  {
    movingRect.shapeColor= "orange";
    b.shapeColor= "orange";
  }
  else{
    movingRect.shapeColor = "blue";
    b.shapeColor = "blue";
  }
  */
  bounceOff(movingRect,fixedRect);
  drawSprites();
}


function isTouching(ash,vat)
{  
  if(ash.x- vat.x <=ash.width/2+vat.width/2 
  && vat.x- ash.x <=ash.width/2+vat.width/2 
  && ash.y- vat.y <=ash.height/2+vat.height/2 
  && vat.y- ash.y <=ash.height/2+vat.height/2 )
{
  return true;
}
else
{
  return false;
}
}
function bounceOff(a,v)
{
  if(a.x- v.x <=a.width/2+v.width/2 
    && v.x- a.x <=a.width/2+v.width/2)
    {
      a.velocityX = a.velocityX * (-1);
      v.velocityX = v.velocityX * (-1);
    }
  if(a.y- v.y <=a.height/2+v.height/2 
      && v.y- a.y <=a.height/2+v.height/2)
      {
        a.velocityY = a.velocityY * (-1);
        v.velocityY = v.velocityY * (-1);
      }
}