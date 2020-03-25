let colorR = 0.0;
let colorG = 0.0;
let colorB = 0.0;
let rayX = 0.0;
let rayY = 0.0;
//let angle = 0;

class Ray {
  constructor(pos, angle) {
    this.pos = pos;
    this.dir = p5.Vector.fromAngle(angle);
    this.rays = [];
    this.a = floor(angle);

  }

  show() {
    colorR = colorR + 0.1;
    colorG = colorG + 0.2;
    colorB = colorB + 0.3;

    rayY = rayY + 0.1;
    rayX = rayX + 0.1;
    //let nx = noise(rayX) * 90;
    //let nx = rayX * 90;
   
    let ny = noise(rayY) * 200;
    w = map(this.a,0,360,50,0)
    let nR = map(this.a, 0, 360, noise(colorR) * 255, 255);
    let nG = map(this.a, 0, 360, noise(colorG) * 255, 255);
    let nB = map(this.a, 0, 360, noise(colorB) * 255, 255);
    stroke(nR,nG,nB);
    push();
    translate(this.pos.x, this.pos.y);
    rotate(angle);
    ellipse(0, 0, this.dir.x * 15, this.dir.y * ny);
    pop();

    push();
    translate(this.pos.x, this.pos.y);
    rotate(-angle);
    ellipse(0, 0, this.dir.x * 15, this.dir.y * ny);
    pop();

    push();
    translate(this.pos.x, this.pos.y);
    rotate(angle / 4);
    ellipse(0, 0, this.dir.x * 10, this.dir.y * ny);
    pop();
    
    push();
    translate(this.pos.x, this.pos.y);
    rotate(angle / -4);
    ellipse(0, 0, this.dir.x * 10, this.dir.y * ny);
    pop();
    
    push();
    translate(this.pos.x, this.pos.y);
    rotate(angle / 2);
    ellipse(0, 0, this.dir.x * 15, this.dir.y * ny);
    pop();

    push();
    translate(this.pos.x, this.pos.y);
    rotate(angle /-2);
    ellipse(0, 0, this.dir.x * 15, this.dir.y * ny);
    pop();



    // push();
    // translate(this.pos.x, this.pos.y);
    // rotate(angle);
    // ellipse(0, 0, this.dir.x * 15, this.dir.y * ny);
    // pop();

    // push();
    // translate(this.pos.x, this.pos.y);
    // rotate(-angle);
    // ellipse(0, 0, this.dir.x * 15, this.dir.y * ny);
    // pop();

    // push();
    // translate(this.pos.x, this.pos.y);
    // rotate(angle / 1.8);
    // ellipse(0, 0, this.dir.x * 10, this.dir.y * ny);
    // pop();
  }
}
