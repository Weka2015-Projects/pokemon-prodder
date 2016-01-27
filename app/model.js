const pokemonList  = {
  0: 'bulbasaur',
  16: 'ivysaur',
  32: 'venusaur',
  48: 'charmander',
  84: 'charmeleon',
  100: 'charizard',
  136: 'squirtle',
  152: 'wartortle',
  188: 'blastoise',
  195: 'caterpie',
  205: 'metapod',
  212: 'butterfree',
  219: 'weedle',
  229: 'kakuna',
  239: 'beedrill'
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
    var timer = 30
    var interval = setInterval(function() {
      timer--
      $('#time').text(timer)
      if (timer === 0){
        clearInterval(interval)
      }
    }, 1000)
  }
}
