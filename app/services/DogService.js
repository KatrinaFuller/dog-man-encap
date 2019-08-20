import Dog from "../models/Dog.js";


//PRIVATE
let _dog = new Dog();

//PUBLIC
export default class DogService {
  constructor() {
    console.log("Hello from DogService")
  }
}