gravity=new p5.Vector(0,0.03)
wind=new p5.Vector(0.1,0)

function setup() {
  createCanvas(500, 500);
  x = 200;
  y = 200;
  xspeed = 2.5;
  yspeed = -2;

  b=new Mover(x,y)
}

function draw() {
  // this is important to avoid shadding effect on figures
  background(0);
	b.move()
	b.display()

	// apply gravity force over objects
	b.applyForce(gravity)
	// when you click mouse you blow wind on the object (apply wind force)
	if(mouseIsPressed){
		b.applyForce(wind)
	}
}
