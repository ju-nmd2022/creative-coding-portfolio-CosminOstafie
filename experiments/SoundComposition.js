let polySynth;
let startAudio = false;

function firstScreen() {
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(30);
  text("Click to start sound", width / 2, height / 2);
}

function setup() {
  createCanvas(600, 600);
  polySynth = new Tone.PolySynth().toDestination();
  // Tone.Transport.start();
  Tone.Transport.scheduleRepeat(playChords, "0.22");
}

function draw() {
  if (!startAudio) {
    firstScreen();
  } else {
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

      rectMode(CENTER);
      rect(ellipseX, ellipseY, size * 2, size / 2, 20, 20, 20, 20);
    }
  }
}

function playChords(time) {
  if (startAudio) {
    let chord = random([
      ["C4", "E4", "G4"], // C major chord
      ["D4", "F#4", "A4"], // D major chord
      ["E4", "G4", "B4"], // E minor chord
      ["F4", "A4", "C5"], // F major chord
      ["G4", "B4", "D5"], // G major chord
    ]);

    polySynth.triggerAttackRelease(chord, "16n", time);
  }
}

function mousePressed() {
  if (!startAudio) {
    Tone.start();
    startAudio = true;
    Tone.Transport.start();
  }
}
