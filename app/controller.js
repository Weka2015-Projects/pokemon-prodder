import {Model} from './model'
import {View} from './view'

export class Controller {
  constructor() {
    this.model = new Model()
    this.view = new View()
  }
  clickCounter() {
    this.model.clickCounter()
    this.view.render(this.model)
  }
  pokemonMastered() {
    this.model.pokemonMastered()
    this.view.render(this.model)
  }
  onRestart() {
    this.model = new Model()
    this.model.onRestart()
    this.view.render(this.model)
  }
  startTimer() {
    this.model.timer()
    this.view.render(this.model)
  }
}
