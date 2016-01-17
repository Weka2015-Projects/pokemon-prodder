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
        $('.charmander').removeClass('charmander').addClass('charmeleon')
        this.mastered++
      }
      if(this.counter === 10){
        $('.charmeleon').removeClass('charmeleon').addClass('charizard')
        this.mastered++
      }
      if(this.counter === 15){
        $('.charizard').removeClass('charizard').addClass('bulbasaur')
        this.mastered++
      }
      if(this.counter === 20){
        $('.bulbasaur').removeClass('bulbasaur').addClass('ivysaur')
        this.mastered++
      }
      if(this.counter === 25){
        $('.ivysaur').removeClass('ivysaur').addClass('venusaur')
        this.mastered++
      }
}
}
