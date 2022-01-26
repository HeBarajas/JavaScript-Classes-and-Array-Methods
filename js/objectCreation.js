// console.log('Hello How are you doing today?')

// Object - {key: value, ...}

// Simple JavaScript Object
let person = {
    firstName: 'Thomas',
    age: 34,
    favColor: 'blue'
}

console.log(person);

// Complex JavasScript Object
let person2 = {
    firstName: 'Heather',
    age: 28, 
    programmingLanguages: ['Python', 'JavaSvcript', 'C++', 'Java'],
    employment: {
        company: 'Good Stuff Inc',
        position: 'CEO',
        salary: 10000000
    }

}

console.log(person2);

//  Objects can also have functions!

let myObject = {
    firstName: 'Peter',
    hello: function(){console.log(`Hello ${this.firstName}!`)} // Reminder: Only Tick marks(``) work for this.
}

console.log(myObject);

console.log(myObject.hello);
myObject.hello();


myObject.lastName = 'Gabriel'
console.log(myObject)

//  INTRO TO JAVASCRIPT PROTOTYPES AND CLASSES

// let animal = {};
// animal.name = 'Frank';
// animal.energy =10;

// animal.eat = function(amount){
//     console.log(`${this.name} is eating`);
//     this.energy += amount
// }
// animal.sleep = function(amount){
//     console.log(`${this.name} is eating`);
//     this.energy += amount
// }
// animal.play = function(amount){
//     console.log(`${this.name} is eating`);
//     this.energy -= amount
// }

// console.log(animal);

// animal.eat(10);
// animal.play(15);
// animal.sleep(20);

//////////////////////////////
// Functional Instantiation//
/////////////////////////////

// function Animal(name, energy){
//     let animal = {};
// animal.name = name;
// animal.energy = energy;

// animal.eat = function(amount){
//     console.log(`${this.name} is eating`);
//     this.energy += amount
// }
// animal.sleep = function(amount){
//     console.log(`${this.name} is sleeping`);
//     this.energy += amount
// }
// animal.play = function(amount){
//     console.log(`${this.name} is playing`);
//     this.energy -= amount
// }

// return animal
// }

// const goofy = Animal('Goofy', 25);
// const snoopy = Animal('Snoopy', 15);
// console.log(goofy);
// console.log(snoopy);

//////////////////////////////////////////////////
// Functional Instantiation With Shared Methods//
/////////////////////////////////////////////////

// const animalMethods = {
//     eat: function(amount){
//         console.log(`${this.name} is eating`);
//         this.energy += amount} ,
//     sleep: function(amount){
//         console.log(`${this.name} is sleeping`);
//         this.energy += amount} ,
//     play: function(amount){
//         console.log(`${this.name} is playing`);
//         this.energy -= amount}
// }

// function Animal(name, energy){
//     let animal = {};
// animal.name = name;
// animal.energy = energy;

// animal.eat = animalMethods.eat  

// animal.sleep = animalMethods.sleep 

// animal.play = animalMethods.play


// return animal
// }

// const goofy = Animal('Goofy', 25);
// const snoopy = Animal('Snoopy', 15);
// console.log(goofy);
// console.log(snoopy);

/////////////////////
// Object.create()//
///////////////////

// let parent = {
//     firstName: 'Rose',
//     age: 70,
//     heritage: 'Irish'
// }

// let child = Object.create(parent);
// child.name = 'Seamus';
// child.age = 35;

// console.log(child.name);
// console.log(child.heritage);
// console.log(child);

/////////////////////////////////////////////////
// Functional Instantiation With Create.object//
////////////////////////////////////////////////

// const animalMethods = {
//     eat: function(amount){
//         console.log(`${this.name} is eating`);
//         this.energy += amount} ,
//     sleep: function(amount){
//         console.log(`${this.name} is sleeping`);
//         this.energy += amount} ,
//     play: function(amount){
//         console.log(`${this.name} is playing`);
//         this.energy -= amount}
// }

// function Animal(name, energy){
//     let animal = Object.create(animalMethods);
// animal.name = name;
// animal.energy = energy;


// return animal
// }

// const goofy = Animal('Goofy', 25);
// const snoopy = Animal('Snoopy', 15);
// console.log(goofy);
// console.log(snoopy);

// function doSomething(){}
// console.log(doSomething);
// console.log(doSomething.prototype);
// console.log(typeof(doSomething.prototype));

// console.log(Animal.prototype)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function Animal(name, energy){
//     let animal = Object.create(Animal.prototype);
//     animal.name = name;
//     animal.energy = energy;
//     return animal
// }
// Animal.prototype.eat = function(amount){
//         console.log(`${this.name} is eating`);
//         this.energy += amount
// }
// Animal.prototype.sleep = function(amount){
//         console.log(`${this.name} is sleeping`);
//         this.energy += amount
// }
// Animal.prototype.play = function(amount){
//         console.log(`${this.name} is playing`);
//         this.energy -= amount
// }

// const goofy = Animal('Goofy', 25);
// const snoopy = Animal('Snoopy', 15);

// console.log(goofy);
// console.log(snoopy);


/////////////////////////////////////
// Instantiation with new keyword //
// Pseudoclkassical Instantiation //
///////////////////////////////////

// function Animal(name, energy){
//     // let animal = Object.create(Animal.prototype);
//     this.name = name;
//     this.energy = energy;
//     // return animal
// }
// Animal.prototype.eat = function(amount){
//         console.log(`${this.name} is eating`);
//         this.energy += amount
// }
// Animal.prototype.sleep = function(amount){
//         console.log(`${this.name} is sleeping`);
//         this.energy += amount
// }
// Animal.prototype.play = function(amount){
//         console.log(`${this.name} is playing`);
//         this.energy -= amount
// }

// const goofy = new Animal('Goofy', 25);
// const snoopy = new Animal('Snoopy', 15);

// console.log(goofy);
// console.log(snoopy);

//////////////////////////////////
//ES6 - Using the class Keyword//
/////////////////////////////////

// class Animal{
//     constructor(name, energy){
//         this.name = name;
//     this.ener
//     }
//     eat(amount){
//         console.log(`${this.name} is eating`);
//         this.energy += amount
//     }
//     play(amount){
//         console.log(`${this.name} is playing`);
//         this.energy -= amount
//     }
//     sleep(amount){
//         console.log(`${this.name} is sleeping`);
//         this.energy += amount
//     }
// }


// const goofy = new Animal('Goofy', 25);
// const snoopy = new Animal('Snoopy', 15);

// console.log(goofy);
// console.log(snoopy);

// let myArray = [1, 2, 3, 4];
// console.log(myArray)

///////////////////////////////////
// JavaScript object Inheritance//
/////////////////////////////////

class Human{
    constructor(name, age, gender){
        console.log('Human Constructor Called');
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    sleep (amount){
        console.log(`${this.name} is sleeping for ${amount} minutes`)
    }
}

const wilma = new Human('Wilma', 25, 'F');
const fred = new Human('Fred', 25, 'M');

console.log(wilma);
console.log(fred);
/////////////////////////////////////////
// Inherit using the `extends` keyword//
////////////////////////////////////////

class Baby extends Human{
    constructor(babyName, babyAge, babyGender, canCrawl){
        console.log('Baby constructor called!');
        super(babyName, babyAge, babyGender);
        this.canCrawl = canCrawl
    }
    crawl(){
        if(this.canCrawl){
            console.log(`${this.name} can crawl`)
        } else {
            console.log(`${this.name} cannot crawl`)
        }
    }
}

const bambam = new Baby(`Bam Bam`, 1, 'M', true);
console.log(bambam);