function setup() {
  const size = 600;
  createCanvas(size, size);
  background(255);
  noLoop();
  strokeWeight(2);

  const randomDisplacement = 15;
  const rotateMultiplier = 50;
  const offset = 10;
  const squareSize = 30;

  for (let x = squareSize; x <= size - squareSize; x += squareSize) {
    for (let y = squareSize; y <= size - squareSize; y += squareSize) {
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
      noFill();
      rect(0, 0, squareSize, squareSize);
      pop();
    }
  }
}

function draw() {}
