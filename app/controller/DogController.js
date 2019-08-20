import DogService from "../services/DogService.js";


// PRIVATE
let _dogService = new DogService();

function _draw() {
  let nameElement = document.querySelector("#dog-name")
  let petCountElement = document.querySelector("#pet-count")
  let dog = _dogService.Dog
  nameElement.textContent = dog.name
  petCountElement.textContent = dog.petCount.toString();
}

// PUBLIC
export default class DogController {
  constructor() {
    console.log("Hello from DogController")
    _draw();
  }

  // let server know the user wants to pet the dog
  pet() {
    _dogService.pet()
    _draw();
  }

  // let the server know the user want to give a dog bone
  dogBone() {
    _dogService.dogBone();
    _draw();
  }
}