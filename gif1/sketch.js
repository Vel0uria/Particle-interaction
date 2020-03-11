let w = 0;


function setup() {
	createCanvas(windowWidth, 400);
	

	 particle = new Particle()
	// particle1 = new Particle(380,105)


}

function draw() {
	
// background(0,w)
background(0,40)

//line(80,85,380,105,random(z),random(z))
 
// ray.show()
// ray.lookAt(mouseX, mouseY)
// let pt = ray.cast(wall)
// if(pt){

// fill(255)
// ellipse(pt.x, pt.y,8,8)

// }

particle.show()
//particle1.show()

//particle.move()
//particle1.show()

angle = angle + 0.01


}