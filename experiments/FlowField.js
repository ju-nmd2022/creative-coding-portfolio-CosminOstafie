let particles = [];
let particleAmount = 2000;
let noiseScale = 0.01;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < particleAmount; i++) {
    particles.push(createVector(random(width), random(height)));
    colorMode(HSL);

    stroke(255);
  }
}

function draw() {
  background(0, 10);
  for (let i = 0; i < particleAmount; i++) {
    let particle = particles[i];
    point(particle.x, particle.y);
    let n = noise(particle.x * noiseScale, particle.y * noiseScale);
    let angle = n * TWO_PI;
    particle.x += cos(angle);
    particle.y += sin(angle);
    if (!checkOnScreen(particle)) {
      particle.x = random(width);
      particle.y = random(height);
    }
  }
}

function checkOnScreen(v) {
  return v.x >= 0 && v.x <= width && v.y >= 0 && v.y <= height;
}
