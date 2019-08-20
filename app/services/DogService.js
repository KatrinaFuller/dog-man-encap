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

  dogBone() {
    _dog.petCount = 0
  }

  get Dog() {
    return _dog
  }
}