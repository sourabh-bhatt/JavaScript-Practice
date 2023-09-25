function findLongestWord(inputString) {
    const words = inputString.split(' ');  
    let longestWord = '';
    let longestWordLength = 0;  
    for (const word of words) {
      const cleanedWord = word.replace(/[^A-Za-z0-9]/g, '');  
      if (cleanedWord.length > longestWordLength) {
        longestWord = cleanedWord;
        longestWordLength = cleanedWord.length;
      }
    }
  
    return longestWord;
  }
  
  const inputString = "Web Devvelopment";
  const longestWord = findLongestWord(inputString);
  console.log("The longest word is:", longestWord);
  