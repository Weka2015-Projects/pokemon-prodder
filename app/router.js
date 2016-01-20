import $ from 'jquery'
import {Controller} from './controller'

export class Router {
  constructor() {
    this.controller = new Controller()
  }
  listen() {
    let that = this
    // console.log("listening on server")
    $(() => {
       $('.image').on('click',(function() {
        that.controller.clickCounter()
        })
      )
    $(() => {
      $('button').click(function() {
        that.controller.onRestart()
        })
      })
    })
  }
}
