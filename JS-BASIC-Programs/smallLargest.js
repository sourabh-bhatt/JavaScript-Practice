function smallestLargest(arr) {
  if (arr.length === 0) {
    return false;
  }
  const smallest = Math.min(...arr);
  const largest = Math.max(...arr);

  return { smallest, largest };
}

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, -2343, 0.979];
// const numbers = [];

const result = smallestLargest(numbers);

console.log(`Smallest: ${result.smallest}`);
console.log(`Largest: ${result.largest}`);
