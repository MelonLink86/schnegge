let snake;
let rez = 40;
let food;
let w;
let h;


function setup() {
  createCanvas(800, 800);
  w = floor(width / rez);
  h = floor(height / rez);
  frameRate(5);
  snake = new Snake();
  foodLocation();
}


function foodLocation() {
  let x = floor(random(w));
  let y = floor(random(h));
  food = createVector(x, y);

}


  //function reset (){
  // if snake.endGame() {

    //setup();
    //body = 0;
    //len = 0;
  // }
  //}

function keyPressed() {
  if (!snake.endGame()) {
    if (keyCode === LEFT_ARROW) {
      snake.setDir(-1, 0);
    } else if (keyCode === RIGHT_ARROW) {
      snake.setDir(1, 0);
    } else if (keyCode === DOWN_ARROW) {
      snake.setDir(0, 1);
    } else if (keyCode === UP_ARROW) {
      snake.setDir(0, -1); 
    } else if (key == ' ') {
    snake.grow();
    }
  }
 // else if (keyCode === ENTER) {
   //  loop(); 
   //reset();
  
}

function draw() {
  scale(rez);
  background(200);
  if (snake.eat(food)) {
    foodLocation();
  }
  snake.update();
  snake.show();

  
  if (snake.endGame()) {
    print("END GAME");
    background(255, 0, 0);


    fill(0, 0, 255);
    textSize(0.7);
    textAlign(CENTER)
    text("du hurensohn spiel spiele die du kannst du bastard", width/2/ rez, height/2/rez-0.5);
    console.log((width/rez*height/rez)-snake.len)
    text("du bist so schlecht: " + ((width/rez*height/rez)-snake.len), width/2/rez, height/2/rez+0.5);
    noLoop();
  
    
}

  
  noStroke()
  fill(255, 0, 0);
  rect(food.x, food.y, 1, 1)
  
}
