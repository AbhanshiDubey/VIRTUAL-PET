//Create variables here
var  dog, happyDog, database, foodS, foodStock;

function preload()
{
  //load images here
  dog = loadImage ("images/dogImg.png");
  happyDog = loadImage ("images/dagImg1.png");
}

function setup() {
  createCanvas(500,500);
  
  database = firebase.database();
  dog = createSprite(250,250,10,10);
 foodStock = database.ref('Food');
 foodStock.on("value", readStock);
  
}


function draw() {  
  background(46, 139, 87);

  if(keyWentDown(UP_ARROW)){
writeStock(foodS);
dog.addImage(dogHappy);

}

  drawSprites();
  //add styles here
  writeStock();

}

function writeStock (x){

  if(x<=0){
x=0;
  }else{
x=x-1;
  }
  database.ref('/').update({
Food:x
  })
}

function readStock (data){
  foodS = data.val();
}

function writeStock (x) {
  database.ref('/').update({
    Food:x
  })
}




