import DogController from "./controller/DogController.js";


class App {
  constructor() {
    console.log("Hello from main.js")
    this.controllers = {
      dogController: new DogController(),
    }
  }
}

window["app"] = new App()