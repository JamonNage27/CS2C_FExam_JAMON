// sortingAlgoBubble.js
let numbers = [];
let numCount = 10;

for (let i = 0; i < numCount; i++) {
    let num = parseInt(prompt(`Enter number ${i + 1}:`));
    numbers.push(num);
}

function bubbleSort(arr) {
    let len = arr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < len - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Swap elements
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
                console.log(`Swapped ${arr[i]} and ${arr[i+1]}`);
            }
        }
    } while (swapped);
    console.log("Sorted array:", arr);
}

bubbleSort(numbers);
