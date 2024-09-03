function setup() {
  const size = 600;
  createCanvas(size, size);
  background(255);
  noLoop();
  strokeWeight(1.5);

  const randomDisplacement = 15;
  const rotateMultiplier = 30;
  const offset = 10;
  const squareSize = 30;

  for (let x = squareSize; x <= size - squareSize; x += squareSize) {
    for (let y = squareSize; y <= size - squareSize; y += squareSize) {
      // Calculate the number of squares to draw based on the y position
      let densityFactor = map(y, squareSize, size - squareSize, 1, 5);
      let alphaFactor = map(y, squareSize, size - squareSize, 255, 50);
      for (let n = 0; n < densityFactor; n++) {
        let plusOrMinus = random() < 0.5 ? -1 : 1;
        let rotateAmount =
          (((y / size) * PI) / 180) * plusOrMinus * random() * rotateMultiplier;

        plusOrMinus = random() < 0.5 ? -1 : 1;
        let translateAmount =
          (y / size) * plusOrMinus * random() * randomDisplacement;

        push();
        translate(x + translateAmount + offset, y + offset);
        rotate(rotateAmount);
        rectMode(CENTER);
        stroke(0, 0, 0, alphaFactor);
        fill(random(255), random(255), random(255), alphaFactor);
        rect(0, 0, squareSize, squareSize);
        pop();
      }
    }
  }
}

function draw() {}
