export default class CounterService {
  counter = 0;

  add() {
    this.counter++;
  }

  show() {
    console.log(this.counter);
  }
}