let particles = [];
let particleAmount = 5500;
let noiseScale = 0.01;

function setup() {
  createCanvas(innerWidth, innerHeight);
  colorMode(HSB, 360, 100, 100);

  for (let i = 0; i < particleAmount; i++) {
    particles.push(createVector(random(width), random(height)));
  }
}

function draw() {
  background(0, 0, 0, 10);
  for (let i = 0; i < particleAmount; i++) {
    let particle = particles[i];

    // Set color based on particle position and noise
    let n = noise(particle.x * noiseScale, particle.y * noiseScale);
    let hue = (frameCount + i) % 360;
    stroke(hue, 100, 100); // (hue, saturation, brightness).

    point(particle.x, particle.y);

    let angle = n * TWO_PI;
    particle.x += cos(angle);
    particle.y += sin(angle);
    //This was made with the help of ChatGpt
    if (mouseIsPressed) {
      let repelPoint = createVector(mouseX, mouseY); // Mouse as the repelling point
      let dir = p5.Vector.sub(particle, repelPoint); // Direction away from the mouse
      let distance = dir.mag(); // Distance between particle and repelling point
      if (distance < 100) {
        // Apply force only within a certain radius of the mouse
        dir.normalize();
        let force = map(distance, 0, 100, 5, 0); // Stronger force if the particle is closer to the mouse position
        particle.add(dir.mult(force)); // Push particle away
      }
    }

    if (!checkOnScreen(particle)) {
      particle.x = random(width);
      particle.y = random(height);
    }
  }
}

function checkOnScreen(v) {
  return v.x >= 0 && v.x <= width && v.y >= 0 && v.y <= height;
}
