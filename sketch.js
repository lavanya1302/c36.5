//Create variables here
var dog, database,foodStock;
var position;
function preload()
{
	//load images here
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  console.log(database);
 
  dog = createSprite(250,250,10,10);
  database = firebase.database();
  foodStock=database.ref('Food');
  foodStock.on("value",readstock);
  this.image=loadImage("sprites/dogImage.png");
dog.shapeColor = "brown";
foodStock=database.ref('Food');
foodStock.on("value",readStock);

  var dogPosition = database.ref('dog/position');
 dogPosition.on("value", readPosition, showError);
}

 


function draw() {  
  background("white");
  background(46,139,87);
  
  
  else if(keyDown(UP_ARROW)){
    writeStocks(foodS);
  }
 
   function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    function readStock(data){
      foodS=data.val();
    }

  drawSprites();
  function writeStock(x){

    database.ref('/').update({

      
    })
  }
  //add styles here
  function writePosition(x,y){
    database.ref('dog/position').set({
      'x': position.x + x ,
      'y': position.y + y
    })
  }
  
  function readPosition(data){
    position = data.val();
    console.log(position.x);
    dog.x = position.x;
  dog.y = position.y;
  }
  
  function showError(){
    console.log("Error in writing to the database");
  }


}



