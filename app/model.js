const pokemonList  = {
  0: 'bulbasaur',
  7: 'ivysaur',
  10: 'venusaur',
  15: 'charmander',
  20: 'charmeleon',
  30: 'charizard',
  40: 'squirtle',
  50: 'wartortle',
  60: 'blastoise',
  70: 'caterpie',
  80: 'metapod',
  90: 'butterfree',
  100: 'weedle',
  110: 'kakuna',
  120: 'beedrill'
}
export class Model {
  constructor() {
    this.counter = 0
    this.mastered = 0
    this.timer = 0
    this.pokemon = 'bulbasaur'
    }

  countClick() {
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
  startTimer(duration, display) {
    var timer = duration, seconds
    setInterval(function() {
      seconds = parseInt(timer /60, 10)

      seconds = seconds < 10 ? "0" + seconds : seconds
      display.text(seconds)

      if(--timer < 0) {
        timer = duration
      }
    }, 1000)
  }
}
