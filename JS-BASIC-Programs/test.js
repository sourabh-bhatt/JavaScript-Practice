var c = { n: "a" };
function s(fel) {
  fel.name = "w";
  fel = { name: "t" };
}

s(c);
console.log(c.name);
