export class Model {
  constructor() {
    this.counter = 0
    this.mastered = 0
    this.timer = 0
    }
  clickCounter() {
      if(this.counter === 0){
      $('.image').removeClass().addClass('image bulbasaur')
      }
      this.counter += 1
      if(this.counter === 5){
        $('.bulbasaur').removeClass('bulbasaur').addClass('ivysaur')
        this.mastered++
      }
      if(this.counter === 10){
        $('.ivysaur').removeClass('ivysaur').addClass('venusaur')
        this.mastered++
      }
      if(this.counter === 48){
        $('.venusaur').removeClass('venusaur').addClass('charmander')
        this.mastered++
      }
      if(this.counter === 84){
        $('.charmander').removeClass('charmander').addClass('charmeleon')
        this.mastered++
      }
      if(this.counter === 100){
        $('.charmeleon').removeClass('charmeleon').addClass('charizard')
        this.mastered++
      }
      if(this.counter === 136){
        $('.charizard').removeClass('charizard').addClass('squirtle')
        this.mastered++
      }
      if(this.counter === 152){
        $('.squirtle').removeClass('squirtle').addClass('wartortle')
        this.mastered++
      }
      if(this.counter === 188){
        $('.wartortle').removeClass('wartortle').addClass('blastoise')
        this.mastered++
      }
      if(this.counter === 195){
        $('.blastoise').removeClass('blastoise').addClass('caterpie')
        this.mastered++
      }
      if(this.counter === 205){
        $('.caterpie').removeClass('caterpie').addClass('metapod')
        this.mastered++
      }
      if(this.counter === 212){
        $('.metapod').removeClass('metapod').addClass('butterfree')
        this.mastered++
      }
      if(this.counter === 219){
        $('.butterfree').removeClass('butterfree').addClass('weedle')
        this.mastered++
      }
      if(this.counter === 229){
        $('.weedle').removeClass('weedle').addClass('kakuna')
        this.mastered++
      }
      if(this.counter === 239){
        $('.kakuna').removeClass('kakuna').addClass('beedrill')
        this.mastered++
      }
  }
  onRestart() {
      this.counter = 0
      this.clickCounter()
  }
  startTimer() {
    this.timer = 0
  }

}
