export class View {
  render(Model) {
    // console.log("Data from model: ", Model)
    $("#counter").empty()
    $("#counter").append("<p>number of clicks: " + Model.counter +"</p>")
    $("#counter").append("<p>number mastered: " + Model.mastered +"</p>")
  }
}
