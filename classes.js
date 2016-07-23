class Periphel {
    constructor(name, model) {
        this.model = model
        this.name = name
    }
    on() {
        console.log(`${this.name}, ${this.model} is on.`);
    }
}


class Mouse extends Periphel {
    constructor(x, y) {
        super('Magic Mouse', 'Magic Mouse 2')
        this.coords = { x, y }
        this.move(x, y)
    }

    static create(){
      return new Mouse(300, 300);
    }

    on (){
      console.log(`${this.name}, ${this.model} is on (${this.coords.x}, ${this.coords.y}).`)
    }

    move(x, y) {
        this.coords = { x, y }
    }
}


let m = Mouse.create()
m.move(100, 200)
m.on()
