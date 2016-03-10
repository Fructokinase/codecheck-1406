export class Person {

    //for my own note
    // new Person("Alex").name == "Alex"
    constructor(name){
        this.name = name;
    }

  hello() {
    return `Hello! My name is ${this.name}`;
  }
}

