//function isPalindrome(str) {
  // Convert the string to lowercase for case-insensitive comparison
  str = str.toLowerCase();
  // Reverse the string using built-in methods
  const reversedStr = str.split("").reverse().join("");
  // Log original and reversed strings to the console
  console.log("Original string:", str);
  console.log("Reversed string:", reversedStr);
  // Return true if they are equal, false otherwise
  return str === reversedStr;
}


// Example usage with test cases:
const stringsToCheck = ["racecar", "hello", "deified", "A man, a plan, a canal: Panama"];

for (const str of stringsToCheck) {
  const result = isPalindrome(str.replace(/[^a-zA-Z]/g, '')); //Remove non-alphanumeric characters for more robust palindrome check.
  console.log(`${str} is a palindrome: ${result}`);
}
