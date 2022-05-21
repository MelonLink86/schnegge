class Snake {
    constructor(w, h) {
      this.body = [];
      this.body[0] = createVector(floor(w / 2), floor(h / 2));
      this.xdir = 0;
      this.ydir = 0;
      this.len = 0;
      this.w = w;
      this.h = h;
    }
  
    setDir(x, y) {
      this.xdir = x;
      this.ydir = y;
    }
  
    update() {
      let head = this.body[this.body.length - 1].copy();
      this.body.shift();
      head.x += this.xdir;
      head.y += this.ydir;
      this.body.push(head);
      //this.body[0].x += this.xdir;
      //this.body[0].y += this.ydir;
    }
  
    grow() {
      let head = this.body[this.body.length-1].copy();
      this.len++;
      this.body.push(head);
    }
  
    endGame() {
      let x = this.body[this.body.length - 1].x;
      let y = this.body[this.body.length - 1].y;
      if (x > this.w - 1 || x < 0 || y > this.h - 1 || y < 0) {
        return true;
      }
      for (let i = 0; i < this.body.length - 1; i++) {
        let part = this.body[i];
        if (part.x == x && part.y == y) {
          return true;
        }
      }
      return false;      
    }
  
    eat(pos) {
      let x = this.body[this.body.length - 1].x;
      let y = this.body[this.body.length - 1].y;
      if (x == pos.x && y == pos.y) {
        this.grow();
        return true;
      }
      return false;
    }
  
    show(frameCount) {
      noStroke();
      colorMode(HSB, 100);
      for (let i = this.body.length-2; i >= 0; i--) {
        drawingContext.shadowBlur = 50;
        drawingContext.shadowColor = color((this.body.length-i+(frameCount/10%20))*10%100, 100, 90);
        fill((this.body.length-i+(frameCount/10%20))*10%100, 100, 90);
        rect(this.body[i].x, this.body[i].y, 1, 1);
      }    
      colorMode(RGB, 255)
      drawingContext.shadowBlur = 50;
      drawingContext.shadowColor = color(0);
      fill(0);
      rect(this.body[this.body.length-1].x, this.body[this.body.length-1].y, 1, 1)
    }
  }
  