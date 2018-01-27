export default class CounterSingleton {
  counter = 0;

  private static instance : CounterSingleton;

  static getInstance() {
    if (!CounterSingleton.instance) {
      CounterSingleton.instance = new CounterSingleton();
    }
    return CounterSingleton.instance;
  }

  add() {
    this.counter++;
  }

  show() {
    console.log(this.counter);
  }

}