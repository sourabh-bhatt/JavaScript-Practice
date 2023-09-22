// With Mod Operator

/*
let a = 2;

function oddEvenWithoutMod(a) {
  if (a % 2 == 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
}

oddEvenWithoutMod(a);
*/

// Without Mod Operator

function oddEvenWithoutMod(num) {
  if (num & 1) {
    return num + ": Is Odd";
  } else {
    return num + ": Is Even";
  }
}

const num = 1;
console.log(oddEvenWithoutMod(num));
