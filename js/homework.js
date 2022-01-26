// console.log('Test');

//=======Exercise #1=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years.
*/

// Create our Person Prototype (Person class)
class Person{
    constructor (name, age){
        this.name=name;
        this.age=age;
}
// create the printInfo method
printInfo = function printInfo() {
    console.log(`${this.name} is ${this.age} years old`);
        };
// Create another method for the addAge method
addAge = function addAge(amount){
    this.age += amount
    console.log(`${this.name} is now ${amount} years older, they are ${this.age} years old now`)
        };
}

const billy = new Person('Billy', 30);
const bob = new Person('Bob',32);

console.log(billy);
console.log(bob);

bob.printInfo();
billy.printInfo();
bob.addAge(3);
billy.addAge(10);



//=======Exercise #2=========//
function replaceEvens(arr){
    return arr.map((e, i ) => i%2 === 0 ? 'even index' : e)
}

/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */
let answer = replaceEvens(["Max","Baseball","Reboot","Goku","Trucks","Rodger"]);
console.log(answer);
//huh

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]


