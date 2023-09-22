// The indexOf method allows you to specify the position from which the search should start.
// This is done with a second parameter.

function secondIndexOf(mainString, searchString) {
  let firstIndex = mainString.indexOf(searchString);

  if (firstIndex === -1) {
    return -1;
  }

  let secondIndex = mainString.indexOf(searchString, firstIndex + 1);

  if (secondIndex === -1) {
    return -1;
  }

  return secondIndex;
}

let result = secondIndexOf("White Rabbit", "it");
console.log(result);
