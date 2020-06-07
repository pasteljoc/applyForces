class Mover {
  Mover() {
    x = width / 2;
    y = height / 2;
    xspeed = 2.5;
    yspeed = -1;
  }

  move() {
    x += xspeed;
    y += yspeed;
  }

  bounce() {
    if (x > width || x < 0) {
        xspeed *= -1;
    }
    if (y > height || y < 0) {
        yspeed *= -1;
    }
  }

  display() {
    stroke(255);
    fill(127);
    ellipse(x, y, 48);
  }
}
