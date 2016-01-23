export class Model {
  constructor() {
    this.counter = 0
    this.mastered = 0
    this.timer = 0
    }
  clickCounter() {
    if(this.counter === 0){
      $('.image').removeClass().addClass('image bulbasaur')
      this.counter += 1
    }
  }
  onRestart() {
      this.counter = 0
      this.clickCounter()
  }
  startTimer() {
    this.timer = 0
  }
  testForPokemon() {
    this.
  }
}
