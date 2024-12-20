// mdArrays.js
let names = ["Genevieve", "Juan", "Luna", "Gabriel", "Elise"];
let ages = [24, 65, 21, 5, 9];

// Check if arrays have the same length.
if (names.length !== ages.length) {
  console.error("Error: Names and ages arrays must have the same length.");
  return;
}

// Restructure the arrays
const nameAgePairs = [];
for (let i = 0; i < names.length; i++) {
  nameAgePairs.push([names[i], ages[i]]);
}

console.log(nameAgePairs);
