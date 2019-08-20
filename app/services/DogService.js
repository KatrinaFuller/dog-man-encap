import Dog from "../models/Dog.js";


//PRIVATE
let _dog = new Dog("Mojo");

//PUBLIC
export default class DogService {
  constructor() {
    console.log("Hello from DogService")
  }

  pet() {
    _dog.petCount++
  }

  get Dog() {
    return _dog
  }
}