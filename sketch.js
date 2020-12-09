var carw,wall,speed,weight;
function setup() {
  createCanvas(1200,400);
  car =createSprite(400, 200, 50, 50);
  wall =createSprite(1000,200,40,200)
  car.shapeColor="white"
  wall.shapeColor="green"
  speed=Math.round(random(45,130))
  weight=Math.round(random(400,1500))
  console.log(speed);
  console.log(weight)
  car.velocityX=speed
}

function draw() {
  background(0); 
 if (wall.x-car.x < (car.width+wall.width/2)){
   car.velocityX=0;
   var deformation =0.5* weight * speed *speed/22509
   if (deformation >180){
     car.shapeColor="red"
   }
   if (deformation<1800 && deformation>100){
     car.shapeColor="yellow"
   }
   if (deformation<80){
     car.shapeColor="green"

   }
 }
  drawSprites();

}