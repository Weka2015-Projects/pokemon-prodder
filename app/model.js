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
      if(this.counter === 15){
        $('.ivysaur').removeClass('ivysaur').addClass('venusaur')
        this.mastered++
      }
      if(this.counter === 27){
        $('.venusaur').removeClass('venusaur').addClass('charmander')
        this.mastered++
      }
      if(this.counter === 20){
        $('charmander').removeClass('charmander').addClass('charmeleon')
        this.mastered++
      }
      if(this.counter === 25){
        $('.charmeleon').removeClass('charmeleon').addClass('charizard')
        this.mastered++
      }
}
}
