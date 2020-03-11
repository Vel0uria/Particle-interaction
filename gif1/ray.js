let colorR = 0.0;
let colorG = 0.0;
let colorB = 0.0;
let rayX = 0.0;
let rayY = 0.0;
let angle = 0;

class Ray {
  constructor(pos, angle) {
    this.pos = pos;
    this.dir = p5.Vector.fromAngle(angle);
  }

  show() {
    colorR = colorR + 0.1;
    colorG = colorG + 0.2;
    colorB = colorB + 0.3;

    rayY = rayY + 0.1;
    rayX = rayX + 0.1;
    let nx = noise(rayX) * 90;
    let ny = noise(rayY) * 100;
    // let nx = rayX * 90;
    // let ny = rayY * 100;
    w = map(angle, 0, 360, 80, 240);

    let nR = map(angle, 0, 120, noise(colorR) * 255, 255);
    let nG = map(angle, 0, 240, noise(colorG) * 255, 255);
    let nB = map(angle, 0, 360, noise(colorB) * 255, 255);
    stroke(nR, nG, nB);
    console.log(nR,nG,nB);


    push();
    translate(this.pos.x, this.pos.y);
    rotate(angle);
    ellipse(0, 0, this.dir.x * random(89.9, nx), this.dir.y * random(99.9, ny));
    pop();
    push();
    translate(this.pos.x, this.pos.y);
    rotate(-angle);
    ellipse(
      0,
      0,
      this.dir.y * random(89.9, nx),
      -this.dir.x * random(99.9, ny)
    );

    pop();
    // push();
    // translate(this.pos.x, this.pos.y);
    //  rotate(angle)
    //   line(0, 0, this.dir.x * rayX, this.dir.y * this.rayY);

    // pop();
  }

  cast(wall) {
    const x1 = wall.a.x;
    const y1 = wall.a.y;
    const x2 = wall.b.x;
    const y2 = wall.b.y;

    const x3 = this.pos.x;
    const y3 = this.pos.y;
    const x4 = this.pos.x + this.dir.x;
    const y4 = this.pos.y + this.dir.y;
    const den = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);

    if (den == 0) {
      return;
    }

    const t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / den;
    const u = -((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / den;
    if (t > 0 && t < 1 && u > 0) {
      const pt = createVector();
      pt.x = x1 + t * (x2 - x1);
      pt.y = y1 + t * (y2 - y1);
      return pt;
    } else {
      return;
    }
  }
}
