//palindrome.js.
// Declare two variables containing the following words: (use prompt() function)
let word1 = prompt("Enter the first word: RACECAR");
let word2 = prompt("Enter the second word: RECORDER");

console.log("Original word 1:", word1);
console.log("Reversed word 1:", word1.split("").reverse().join(""));
console.log("Original word 2:", word2);
console.log("Reversed word 2:", word2.split("").reverse().join(""));

console.log("Is word 1 a palindrome?", word1 === word1.split("").reverse().join(""));
console.log("Is word 2 a palindrome?", word2 === word2.split("").reverse().join(""));
