import $ from 'jquery'
import {Controller} from './controller'

export class Router {
  constructor() {
    this.controller = new Controller()
  }
  listen() {
    console.log("listening on server")
    $(() => {
      $('#image').on('click',(function() {
        console.log('Clicked')
      })
      )
    })
  }
}
