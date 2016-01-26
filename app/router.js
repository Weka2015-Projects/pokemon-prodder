import $ from 'jquery'
import {Controller} from './controller'

export class Router {
  constructor() {
    this.controller = new Controller()
  }
  listen() {
    let that = this
    $(() => {
       $('.image').on('click',(function() {
        that.controller.clickCounter()
        that.controller.startTimer()
        }.bind(this))
      )
    $(() => {
      $('.btn-restart').click(function() {
        that.controller.onRestart()
        })
      })
    })
  }
}
