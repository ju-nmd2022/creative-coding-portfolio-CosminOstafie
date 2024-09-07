function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255, 50); // Semi-transparent background for trailing effect
  noStroke();

  const size = random(5, 20);
  const numSquares = 500;
  const centerX = width / 2;
  const centerY = height / 2;
  const radiusX = 200;
  const radiusY = 200;

  for (let i = 0; i < numSquares; i++) {
    let angle = random(TWO_PI);
    let distance = random(1);

    let animatedRadiusX = radiusX + sin(frameCount * 0.01) * 20;
    let animatedRadiusY = radiusY + cos(frameCount * 0.01) * 20;

    // Calculate x and y position within the ellipse
    let ellipseX = centerX + animatedRadiusX * distance * cos(angle);
    let ellipseY = centerY + animatedRadiusY * distance * sin(angle);

    // Assign random color
    fill(random(255), random(255), random(255), 150);

    // Draw square at the calculated position
    rectMode(CENTER);
    rect(ellipseX, ellipseY, size * 2, size / 2, 20, 20, 20, 20);
  }
}
