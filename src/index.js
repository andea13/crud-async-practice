class Counter {
  static initAmount;
  #counter;
  constructor(initialValue) {
    this.#counter = initialValue;
  }

  setCounter(amount = 1) {
    this.#counter += amount;
  }

  getCounter() {
    return this.#counter;
  }
}

console.log(Counter.initAmount);

// function Counter(initialValue) {
//   let _counter = initialValue;

//   this.setCounter = function (amount = 1) {
//     _counter += amount;
//   };

//   this.getCounter = function () {
//     return _counter;
//   };
// }

const addedAmount = new Counter(3);
// console.log(addedAmount);
