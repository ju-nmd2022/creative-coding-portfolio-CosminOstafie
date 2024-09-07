function setup() {
  createCanvas(600, 600);
  background(255);
  noLoop();
}

function draw() {
  //   background(255);
  noStroke();

  const numSquares = 1000;
  const centerX = width / 2;
  const centerY = height / 2;
  const radiusX = 200;
  const radiusY = 200;

  for (let i = 0; i < numSquares; i++) {
    let angle = random(TWO_PI);
    let distance = random(1);

    // Calculate x and y position within the ellipse
    let ellipseX = centerX + radiusX * distance * cos(angle);
    let ellipseY = centerY + radiusY * distance * sin(angle);

    // Vary square size based on distance from center
    let size = map(distance, 0, 1, 20, 5);

    let colorValue = map(distance, 0, 1, 0, 255);
    fill(colorValue, 10, 255 - colorValue); // Gradient effect

    // Draw square at the calculated position
    rectMode(CENTER);
    rect(ellipseX, ellipseY, size, size, 10, 10, 10, 10);
  }
}
