let grid;
let rows;
let cols;
let cellSize = 5; // Variable to change the size of the cells
let nextGen;

//Function to create a new array
function newArray(cols, rows) {
  let arr = [];
  for (let i = 0; i < cols; i++) {
    arr[i] = [];
    for (let j = 0; j < rows; j++) {
      arr[i][j] = [];
    }
  }
  return arr;
}

//Function to count the neighbours of a cell that are alive(1)
//This function was made with the help of chatGpt
function countNeighbors(grid, xPosition, yPosition) {
  let sum = 0; //counter for the number of neighbors
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      let col = (xPosition + i + cols) % cols; // Wrapping around edges
      let row = (yPosition + j + rows) % rows; //so in case that col/row is <0 it checks for neighbors from the other part of the grid
      sum += grid[col][row];
    }
  }
  sum -= grid[xPosition][yPosition]; // remove the cell itself from the counter
  return sum;
}

function setup() {
  createCanvas(600, 600);
  //   background(0, 0, 0);
  frameRate(10);
  cols = floor(width / cellSize); // Set the number of columns and rows by dividing the width/height of the canvas to the cellSize
  rows = floor(height / cellSize);
  grid = newArray(cols, rows);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j] = floor(random(2)); // Initialize the grid and fill it with random values of 0(dead) and 1(alive)
    }
  }
}

function draw() {
  //Draw the initial grid
  background(0);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * cellSize;
      let y = j * cellSize;
      if (grid[i][j] == 1) {
        noStroke();
        fill(255);
        rect(x, y, cellSize - 1, cellSize - 1);
      }
    }
  }
  //Initialize the array that contains the new state based on the rules of Game of Life
  nextGen = newArray(cols, rows);

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let cellState = grid[i][j];

      let neighborNumber = countNeighbors(grid, i, j);

      //Apply the rules of Game of Life

      if (neighborNumber == 3 && cellState == 0) {
        //Reproduction
        nextGen[i][j] = 1;
      } else if (cellState == 1 && (neighborNumber < 2 || neighborNumber > 3)) {
        //Underpopulation and Overpopulation
        nextGen[i][j] = 0;
      } else {
        nextGen[i][j] = cellState;
      }
    }
  }

  //Set the new state of the grid after applying the rules
  grid = nextGen;
}
