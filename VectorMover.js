class Mover {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.location = new p5.Vector(this.x, this.y);
    this.velocity = new p5.Vector(2.5, -1);
    this.acceleration = new p5.Vector(0, 0);
  }

  display() {
    stroke(255);
    fill(127);
    ellipse(this.location.x, this.location.y, 48);
    this.bounce();
  }

  move() {
    //   velocity udpating
    this.velocity.add(this.acceleration);
    this.velocity.limit(3);

    //   location updating
    this.location.add(this.velocity);

    //   acceleration updating
    this.acceleration.mult(0);
  }

  applyForce(force) {
    //   cumulative adding all applied forces
    this.acceleration.add(force);
  }

  bounce() {
    if (this.location.x > width || this.location.x < 0) {
      this.velocity.x *= -1;
    }
    if (this.location.y > height || this.location.y < 0) {
      this.velocity.y *= -1;
    }
  }
}
