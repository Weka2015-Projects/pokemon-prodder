export class Model {
  constructor() {
    this.counter = 0
    this.mastered = 0
    this.image1 = true
    this.image2 = false
    }
  clickCounter() {
      this.counter += 1
      if(this.counter === 5){
        $('.bulbasaur').removeClass('bulbasaur').addClass('ivysaur')
        this.mastered++
      }
      if(this.counter === 10){
        $('.ivysaur').removeClass('ivysaur').addClass('venusaur')
        this.mastered++
      }
      if(this.counter === 15){
        $('.venusaur').removeClass('venusaur').addClass('charmander')
        this.mastered++
      }
      if(this.counter === 20){
        $('.charmander').removeClass('charmander').addClass('charmeleon')
        this.mastered++
      }
      if(this.counter === 25){
        $('.charmeleon').removeClass('charmeleon').addClass('charizard')
        this.mastered++
      }
      if(this.counter === 30){
        $('.charizard').removeClass('charizard').addClass('squirtle')
        this.mastered++
      }
      if(this.counter === 35){
        $('.squirtle').removeClass('squirtle').addClass('wartortle')
        this.mastered++
      }
      if(this.counter === 40){
        $('.wartortle').removeClass('wartortle').addClass('blastoise')
        this.mastered++
      }
      if(this.counter === 45){
        $('.blastoise').removeClass('blastoise').addClass('caterpie')
        this.mastered++
      }
      if(this.counter === 50){
        $('.caterpie').removeClass('caterpie').addClass('metapod')
        this.mastered++
      }
      if(this.counter === 55){
        $('.metapod').removeClass('metapod').addClass('butterfree')
        this.mastered++
      }
  }
}
