let snake;
let rez = 40;
let food;
let w;
let h;
let scooter;
let drei;
let benzin;
let lol;
let schlecht;
let sans;
let started = false;

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

function keyPressed() {
/*  musik (!started){
    musik.play();
    started = true
  } */
  if (!snake.endGame()) {
    if (keyCode === LEFT_ARROW) {
      snake.setDir(-1, 0);
    } else if (keyCode === RIGHT_ARROW) {
      snake.setDir(1, 0);
    } else if (keyCode === DOWN_ARROW) {
      snake.setDir(0, 1);
    } else if (keyCode === UP_ARROW) {
      snake.setDir(0, -1); 
    } else if (keyCode === ENTER) {
      snake.grow();
    }
  }
}

function preload() {
  scooter = loadImage('assets/scooter.jpg');
  drei = loadImage('assets/drei.gif');
  lol = loadImage('assets/lol.gif');
  sans = loadImage('assets/sans.gif');
  schlecht = loadSound('assets/schlecht.mp3');
//  musik = loadSound('assets/musik.mp3');
}

function draw() {
  /* if (!"musik".isPlaying() && started){
   "musik".play()
  } */
  scale(rez);

  if (snake.endGame()) {
    //musik.stop();
    if (!schlecht.isPlaying()){
     schlecht.play();
    }
    print('END GAME');
    background(255, 0, 0);
    image(scooter, 0, 0, width/rez, height/rez);
      
    colorMode(HSB, 100);
    fill(frameCount*5%100, 100, 100);
    textSize(0.8);
    textStyle(BOLD);
    textAlign(CENTER);
    text('du hurensohn spiel spiele die du kannst du bastard', width/2/ rez, height/2/rez-1);
    text('so ein schwinepriester: ' + ((width/rez*height/rez)-snake.len), width/2/rez, height/2/rez+2.5);
    
    translate(width/2/rez-5, height/2/rez-6);
    rotate(frameCount/20%(2*PI));
        imageMode(CENTER);
        image(lol, 0, 0, 5, 5);   

    translate(width/2/rez+5, height/2/rez-6);
        rotate(-(frameCount/20%(2*PI)));
        imageMode(CENTER);
        image(sans, 0, 0, 5, 5);
        imageMode(CORNER);
        translate(0, 0);
        rotate(0);    
      }

  else {
    background(200);
    image(drei, 0, 0, width/rez, height/rez);
  
    if (frameCount%(6-snake.len/4) < 1){
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

  }

}
