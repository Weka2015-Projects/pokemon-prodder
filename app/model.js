export class Model {
  constructor() {
    this.counter = 0
    this.mastered = 0
    this.timer = 0
    }

  clickCounter() {
    this.counter++
    this.mastered++
  }
  onRestart() {
      this.counter = 0
      this.clickCounter()
  }
  startTimer() {
    var timer = 30
    var counter = setInterval(timer, 1000)
    timer == timer -1
    if (timer <= 0){
      clearInterval(counter)
      return
    }
  }
}
