/* const arto = {
    name: 'Arto Hellas',
    age: 35,
    education: "Phd",
    greet: function() {
        console.log('hello, my name is ' + this.name)
    },
    doAddition: function(a, b) {
        console.log(a + b);
    }
}

arto.growOlder = function () {
    this.age += 1;
}

arto.doAddition(1, 5);

const referenceToAddition = arto.doAddition
referenceToAddition(10, 20);

arto.greet();

// const referenceToGreet = arto.greet;
// referenceToGreet();
setTimeout(arto.greet.bind(arto), 1000); 

console.log(arto.age); 
arto.growOlder();
console.log(arto.age);
 */


class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    greet() {
        console.log('hellow, my name is ' + this.name)
    }
    
}

const adam = new Person ('Adam Sandler', 49);
adam.greet()

const janja = new Person("janja the Ganja", 34);
janja.greet()