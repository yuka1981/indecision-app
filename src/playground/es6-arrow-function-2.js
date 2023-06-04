// Challenge area

const multiplier = {
  // number - array of numbers
  // multiplyBy - single number
  // multiply - return a new array where the number have been multiplied
  numbers: [1, 2, 3],
  multiplyBy: 3,
  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy);
  },
};

console.log(multiplier.multiply());
