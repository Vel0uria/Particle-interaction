class Particle {
  constructor() {
    this.pos1 = createVector(71, 61);
    this.pos2 = createVector(195, 64);
    this.pos3 = createVector(410, 140);
    this.pos4 = createVector(135, 210);
    this.lines = [];
    this.rays = [];
    this.xSpeed = 0.7;
    this.ySpeed = 0.7;
    this.x2Speed =  0.5;
    this.y2Speed = 0.2;
    this.x3Speed =  0.6;
    this.y3Speed = 0.6;
    this.x4Speed =  0.4;
    this.y4Speed = 0.4;
    for (let a = 0; a < 360; a += 20) {
      this.rays.push(new Ray(this.pos1, radians(a)));
      this.rays.push(new Ray(this.pos2, radians(a)));
      this.rays.push(new Ray(this.pos3, radians(a)));
      this.rays.push(new Ray(this.pos4, radians(a)));
    }
  }

  show() {
    if (this.pos1.x < 50 || this.pos1.x >= 100) this.xSpeed *= -1;
    if (this.pos1.y < 43 || this.pos1.y >= 160) this.ySpeed *= -1;
    this.pos1.x += this.xSpeed;
    this.pos1.y += this.ySpeed;

    if (this.pos2.x < 190 || this.pos2.x >= 300) this.x2Speed *= -1;
    if (this.pos2.y < 60 || this.pos2.y >= 69) this.y2Speed *= -1;
    this.pos2.x += this.x2Speed;
    this.pos2.y += this.y2Speed;

    if (this.pos3.x < 370 || this.pos3.x >= 425) this.x3Speed *= -1;
    if (this.pos3.y < 75 || this.pos3.y >= 165) this.y3Speed *= -1;
    this.pos3.x += this.x3Speed;
    this.pos3.y += this.y3Speed;

    if (this.pos4.x < 110 || this.pos4.x >= 280) this.x4Speed *= -1;
    if (this.pos4.y < 180 || this.pos4.y >= 230) this.y4Speed *= -1;
    this.pos4.x += this.x4Speed;
    this.pos4.y += this.y4Speed;

    //LÍNEA
    // push();
    // stroke(255);
    // line(this.pos1.x, this.pos1.y, this.pos2.x, this.pos2.y);
    // pop();

    noFill();
    noStroke();
    ellipse(this.pos1.x, this.pos1.y, 0);
    ellipse(this.pos2.x, this.pos2.y, 0);
    ellipse(this.pos3.x, this.pos3.y, 0);
    ellipse(this.pos4.x, this.pos4.y, 0);
    for (let ray of this.rays) {
      ray.show();
    }
  }
}
