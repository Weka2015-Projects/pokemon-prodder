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
  renderTimer(model) {
    span = document.getElementById("timer")
    span.innerHTML = timer
  }
}
