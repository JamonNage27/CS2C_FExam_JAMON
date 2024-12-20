// groceryStacks.js
let stack = [];

function peek() {
  if (stack.length === 0) {
    return "Stack is empty";
  } else {
    return stack[stack.length - 1];
  }
}

function push(item) {
  stack.push(item);
  console.log("Stack after push:", stack);
}

function pop() {
  if (stack.length === 0) {
    console.log("Stack is empty. Cannot pop.");
  } else {
    let poppedItem = stack.pop();
    console.log("Popped item:", poppedItem);
    console.log("Stack after pop:", stack);
  }
}

for (let i = 0; i < 5; i++) {
  let item = prompt("Enter a grocery item:");
  push(item);
}

console.log("Final stack:", stack);
let topItem = peek();
console.log("Top item:", topItem);

pop();
pop();

console.log("Final stack after pops:", stack);
