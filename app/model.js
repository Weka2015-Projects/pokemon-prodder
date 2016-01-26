const pokemonList  = {
  0: 'bulbasaur', 
  5: 'ivysaur',
  10: 'venusaur'
}
export class Model {
  constructor() {
    this.counter = 0
    this.mastered = 0
    this.timer = 0
    this.pokemon = 'bulbasaur'
    }

  clickCounter() {
    this.counter++
    this.checkForMaster()
  }
  checkForMaster() {
    if (pokemonList[this.counter]) {
      this.pokemon = pokemonList[this.counter]  
      this.mastered++
    }
  }
  restart() {
      this.counter = 0
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
