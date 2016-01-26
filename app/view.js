export class View {
  render(model) {
    this.renderImage(model)
    $("#counter").empty()
    $("#counter").append("<p>number of clicks: " + model.counter +"</p>")
    $("#counter").append("<p>number mastered: " + model.mastered +"</p>")
  }

  renderImage(model) {
    $('#image').removeClass().addClass(model.pokemon)
  }
}

/*
 *
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
      */
