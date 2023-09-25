function generateCombinations(input) {
    const result = [];
  
    function combine(current, remaining) {
      if (remaining.length === 0) {
        result.push(current);
        return;
      }
  
      combine(current + remaining[0], remaining.slice(1)); 
      combine(current, remaining.slice(1)); 
    }
  
    combine('', input);
    return result;
  }
  
  const inputString = 'dog';
  const combinations = generateCombinations(inputString);
  console.log(combinations);
  