class Animal {
    constructor(name, legs, speak) {
        this.name = name;
        this.legs = legs;
        this.speak = speak;
    }
    speak() {
        console.log(`${this.name} makes a noise ${this.speak} has legs ${this.legs}`);
    }
}

let dog  = new Animal("dog", 4, "bhow bhow");
dog.speak();