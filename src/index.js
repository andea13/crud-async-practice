class Counter {
  #counter;
  constructor(initialValue) {
    this.#counter = initialValue;
  }

  setCounter(amount = 1) {
    this.#counter += amount;
  }

  getCounter() {
    this.#counter += amount;
  }
}

const addedAmount = new Counter(3);
console.log(addedAmount);
