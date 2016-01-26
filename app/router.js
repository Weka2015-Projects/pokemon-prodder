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
        that.controller.countClick()
        that.controller.startTimer()
        })
      )
    $(() => {
      $('.btn-restart').click(function() {
        that.controller.restart()
        })
      })
    })
  }
}

$('#new-game').on('submit', (e) => {
  e.preventDefault()
  var input = $('#new-game input[name=name]')
  var gameName = input.val()
  $.post('/usernames', {name: gameName})
  input.val('')
})
