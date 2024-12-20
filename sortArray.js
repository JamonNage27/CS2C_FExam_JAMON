// sortArray.js
function sortArr() {
  let numbers = [24, 65, 21, 5, 9, 32, 42, 80, 57];
  let names = ["Zenvo", "Erica", "Jordie", "Alicia", "Redon"];

  // Merge the arrays
  let mergedArr = numbers.concat(names);
  console.log("Merged array:", mergedArray);

  // Sort numbers in reverse numerical order
  numbers.sort((a, b) => b - a); 
  console.log("Sorted numbers (descending):", numbers);

  // Sort names alphabetically
  names.sort();
  console.log("Sorted names (ascending):", names);
}

sortArrays();
