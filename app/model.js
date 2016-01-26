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
    var start = Date.now(),
      diff,
      seconds
    function timer() {
      diff = duration - (((Date.now() - start) / 1000) | 0)
      seconds = (diff % 60) | 0
      seconds = seconds < 10 ? "0" + seconds : seconds
      if (diff <= 0) {
        start = Date.now() + 1000
       }
    }
    timer()
    setInterval(timer, 1000)
  }
}
