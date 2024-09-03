// //Variables
// const squareSize = 30;

// function setup() {
//   createCanvas(innerWidth, innerHeight);
//   background(255);
// }

// function drawSquare() {
//   for (let i = squareSize; i <= width; i += squareSize) {
//     for (let j = squareSize; j <= height; j += squareSize) {
//       translate(i, j);
//       rect(-squareSize / 2, -squareSize / 2, squareSize);
//     }
//   }
// }

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
    for (var y = squareSize; y <= size - squareSize; y += squareSize) {
      let plusOrMinus = random() < 0.5 ? -1 : 1;
      let normalizedY = 1 - y / size;
      let rotateAmount =
        ((normalizedY * PI) / 180) * plusOrMinus * random() * rotateMultiplier;

      plusOrMinus = random() < 0.5 ? -1 : 1;
      let translateAmount =
        normalizedY * plusOrMinus * random() * randomDisplacement;

      let randomColor = ["#7800FF", "#FFD100"];
      push();
      translate(x + translateAmount + offset, y + offset);
      rotate(rotateAmount);
      rectMode(CENTER);
      fill(random(randomColor));
      rect(0, 0, squareSize, squareSize);
      pop();
    }
  }
}

function draw() {}
