//nodeListing.js
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(data) {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
    this.print();
  }

  print() {
    let current = this.head;
    let output = "";
    while (current) {
      output += current.data + " ";
      current = current.next;
    }
    console.log(output);
  }
}

let list = new LinkedList();
list.append("Data Structures - Array");
list.append("Variable Type - Integer");
list.append("Sorting Algorithm - Bubble Sort");
