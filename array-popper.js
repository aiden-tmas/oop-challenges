class Popper {
  constructor(array) {
    this.array = array;
    this.index = 0;
  }

  pop() {
    if (this.array.length === 0) {
      return "empty";
    } else if (this.index === 0) {
      let removed = this.array.shift();
      this.index = 1;
      return removed;
    } else {
      let removed = this.array.pop();
      this.index = 0;
      return removed;
    }
  }
}

const poppeeArray = new Popper([1, 2, 3, 4, 5]);

console.log(poppeeArray.pop());
console.log(poppeeArray.pop());
console.log(poppeeArray.pop());
console.log(poppeeArray.pop());
console.log(poppeeArray.pop());
console.log(poppeeArray.pop());
