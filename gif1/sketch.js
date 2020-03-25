let w = 0;
let img;

function setup() {
	createCanvas(windowWidth, 200);
      particle = new Particle()
      img = loadImage('../data/bojack.png')
      frameRate(10)
      createLoop({ duration:6, gif:true, download:true, fileName:'star.gif', options:{width:1920,height:1080}})
}

function draw() {
	
 //background(w,100)
background(0,w)
//background(0)

image(img, 130,height-100,80,100)
particle.show()
angle = angle + 0.09


}