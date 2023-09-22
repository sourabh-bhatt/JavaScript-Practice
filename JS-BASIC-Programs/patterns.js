// Solid rectangular

/*
function star(rows, columns) {
  for (let i = 1; i <= rows; i++) {
    let row = "";
    for (let j = 1; j <= columns; j++) {
      row += "*";
    }
    console.log(row);
  }
}

const numRows = 5;
const numColumns = 8;
star(numRows, numColumns);

console.log("lol");
// Hollow rectangular

function hollow(row2, column2) {
  for (let i = 1; i <= row2; i++) {
    let row_ = "";
    for (let j = 1; j <= column2; j++) {
      if (i === 1 || i === row2 || j === 1 || j === column2) {
        row_ += "*";
      } else {
        row_ += " ";
      }
    }
    console.log(row_);
  }
}

const numRows2 = 5;
const numColumns2 = 8;
hollow(numRows2, numColumns2);

console.log("lol");

*/

// Pyramid: 1

// function pyramid(rows) {
//   for (let i = 1; i <= rows; i++) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//       row += j + " ";
//     }
//     console.log(row);
//   }
// }

// const numRows = 5;

// pyramid(numRows);

// Pyramid: 2

// function pyramid2(rows) {
//   for (let i = rows; i >= 1; i--) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//       row += j + " ";
//     }
//     console.log(row);
//   }
// }

// const n = 5;

// pyramid2(n);

// Pyramid: 3

function printNumberPattern(rows) {
  for (let i = 1; i <= rows; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += j + " ";
    }
    console.log(row);
  }
  for (let i = rows - 1; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += j + " ";
    }
    console.log(row);
  }
}

const num = 5;

printNumberPattern(num);
