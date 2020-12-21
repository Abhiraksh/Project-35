//Create variables here

var nicedog, happyDog, dog;
var dataBase, a;
var foodS, foodStock, milk=10;

function preload()
{
  happyDog = loadImage("images/dogImg1.png");
  niceDog = loadImage("images/dogImg.png");
}

function setup() {
  createCanvas(500, 500);
  
  dog = createSprite(250,250,30,30);
  dog.addImage(niceDog);
  dog.scale = 0.25;
  
  dataBase = firebase.database();
  foodStock = dataBase.ref("/");
  foodStock.on("value",readOp);
  
}


function draw() {  
   background(46,139,87);
    writeStock(10);
  if(keyDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
    milk = milk-1;
  }
  if(milk%2===0){
    dog.addImage(niceDog);
  }
  if(milk===0){
    milk = 10;
  }
 
  fill("white");
  text("Food Remaining: "+milk,200,150);
  text("PRESS UP ARROW KEY TO FEED GOOFY MILK!",120,50);

  drawSprites();
  //add styles here

}
function readOp(data){
 
  foodS = data.val();

}

function writeStock(x){

 
  dataBase.ref("/").set({
 
    food:x

  }
  )
}


