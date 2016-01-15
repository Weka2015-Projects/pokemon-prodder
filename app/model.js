export class Model {
  constructor() {
    this.counter = 0
    this.image1 = true
    this.image2 = false

  }
  clickCounter() {
      this.counter += 1
      if(this.counter === 10){
        $('.image').css('display', 'none')
    }
  }
}
