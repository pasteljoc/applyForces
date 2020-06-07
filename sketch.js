gravity = new p5.Vector(0, 0.03);
wind = new p5.Vector(0.2, 0);

function setup() {
  createCanvas(500, 500);
  x = 200;
  y = 200;
  xspeed = 2.5;
  yspeed = 2;

  movers = [];
  for (i = 0; i < 5; i++) {
    movers[i] = new Mover(random(width), 0);
  }

}

function draw() {
  // this is important to avoid shadding effect on figures
  background(0);

// apply gravity force over objects
  movers.forEach((m) => {
	// gravity.mult(m.mass)
    m.applyForce(gravity);
    m.display();
  });
  
  // when you click mouse you blow wind on the object (apply wind force)
  if (mouseIsPressed) {
	movers.forEach((m) => {
		m.applyForce(wind);
	  });
	}
}
