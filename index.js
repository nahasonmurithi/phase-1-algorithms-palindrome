function isPalindrome(word) {
  // reverse the input string
  const reversedWord = reverseString(word);
  // compare the reversed string to the input
  return word === reversedWord;
  // Write your algorithm here
}
function reverseString(word) {
  return word.split("").reverse().join("");
}
/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
  the second function reverse the word and compares 
  it to the first function. this works well since 
  both are strings
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
