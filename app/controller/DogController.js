import DogService from "../services/DogService.js";


// PRIVATE
let _dogService = new DogService();

// PUBLIC
export default class DogController {
  constructor() {
    console.log("Hello from DogController")
  }
}