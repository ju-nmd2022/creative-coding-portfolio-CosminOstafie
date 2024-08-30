function setup() {
  createCanvas(600, 600);
  noLoop();
}

let counter = 0;

function draw() {
  background(255);
  noStroke();
  fill(0);

  const size = 20;
  const numSquares = 1000;
  const centerX = width / 2;
  const centerY = height / 2;
  const radiusX = 200;
  const radiusY = 200;

  for (let i = 0; i < numSquares; i++) {
    let angle = random(TWO_PI);
    let distance = random(1);

    let ellipseX = centerX + radiusX * distance * cos(angle);
    let ellipseY = centerY + radiusY * distance * sin(angle);

    const value = noise(i / 10) * random(size);

    // rectMode(CENTER);
    rect(
      ellipseX,
      ellipseY,
      random(value, value * 2),
      random(value / 2, value),
      5,
      5,
      5,
      5
    );
  }
  //   counter += 0.01;
}
