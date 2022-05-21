let snake;
let rez = 40;
let food;
let w;
let h;
let scooter;
let bad;

function setup() {
  createCanvas(800, 800);
  w = floor(width / rez);
  h = floor(height / rez);
  frameRate(30);
  snake = new Snake(w, h);
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
   //reset();,
}

function preload() {
  scooter = loadImage('assets/scooter.jpg');
  bad = loadImage('assets/bad.jpg')
}

function draw() {
  scale(rez);
  background(200);
  image(scooter, 0, 0, width/rez, height/rez);

  if (frameCount%6 == 0){
    if (snake.eat(food)) {
      foodLocation();
    }
    snake.update();
  }
  snake.show(frameCount);
  noStroke();
  colorMode(HSB, 100);
  fill(frameCount*25%100, 100, 100);
  rect(food.x, food.y, 1, 1); 

  if (snake.endGame()) {
    print('END GAME');
    background(255, 0, 0);
      image(bad, 0, 0, width/rez, height/rez)


    fill(255);
    textSize(0.8);
    textStyle(BOLD)
    textAlign(CENTER);
    text('du hurensohn spiel spiele die du kannst du bastard', width/2/ rez, height/2/rez-1);
    text('so ein schwinepriester: ' + ((width/rez*height/rez)-snake.len), width/2/rez, height/2/rez+2.5);
    noLoop();    
}

}
