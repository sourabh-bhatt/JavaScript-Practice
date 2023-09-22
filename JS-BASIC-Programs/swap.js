let a, b;
a = 1;
b = 2;
console.log(a, b);

// [a, b] = [b, a];
// console.log(a, b);

// Using a 3rd variable temp
let c;
c = a;
a = b;
b = c;
console.log(a, b);
