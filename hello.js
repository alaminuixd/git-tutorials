class greet {
    constructor(name, age, greetType, greeting){
        this.name = name;
        this.age = age;
        this.greetType = greetType;
        this.greeting = greeting;
    }
    startGreet = function(){
        const gText = `My Name is ${this.name} and I am ${this.age} years old. I would like to ${this.greeting} you on account of the ${this.greetType}.`;
        return gText;
    }
    sayHobies = function(obj){
        const gText = `I like playing ${obj.one}, ${obj.two}, and ${obj.three}`;
        return gText;
    }
}
const myObj = {
    one: 'football',
    two: 'fishing',
    three: 'reading story book'
}

const g1 = new greet('Alice', 34, 'Eid Ul Fitr', 'Eid mubarak');
console.log(g1.startGreet());

console.log(`--------------------------------------`);
console.log(g1.sayHobies(myObj));