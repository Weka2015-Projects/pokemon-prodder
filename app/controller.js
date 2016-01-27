import {Model} from './model'
import {View} from './view'

export class Controller {
  constructor() {
    this.model = new Model()
    this.view = new View()
  }
  countClick() {
    this.model.countClick()
    this.view.render(this.model)
    if(this.model.counter === 1) {
      this.startTimer()
    }
  }
  restart() {
    this.model = new Model()
    this.model.restart()
    this.view.render(this.model)
  }
  startTimer() {
    this.model.startTimer()
    this.view.render(this.model)
  }
}
