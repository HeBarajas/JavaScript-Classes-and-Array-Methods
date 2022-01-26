// Console.log('Hello this is closures.js)

// Refresh on scope

{
    const test = 'Hello'
}
//console.log(test)

let subject = 'Javascript';

function homework(){
    let student = 'Brian'; // local block level variable
    console.log(`${student} has finished the ${subject} homework`)
}

homework()

// console.log(student): // Error - st0udent is undefined

///////////////////
//Nesting Scopes//
//////////////////

// function outer(){
//     let outerMessage = 'This is the outer message ';
//     function inner(){
//         let innerMessage = outerMessage + "and this is inner"
//         console.log(innerMessage)
//     }
//     inner()
// }

// outer();

//////////////////////////////////////
//RETURN A FUNCTION FROM A FUNCTION//
////////////////////////////////////

// function outer(){
//     let outerMessage = 'This is the outer message ';
//     function inner(){
//         let innerMessage = outerMessage + "and this is inner"
//         console.log(innerMessage)
//     }
//     return inner
// }

// let outerReturn = outer();

// console.log(outerReturn);

//--------------------- OUTERRETURN (WHICH IS A REFERENCE TO THE FUNCTION INNER() ) IS THE CLOSURE
//--------------------- A CLOSURE IS A FUNCTION THAT PRESERVES THE OUTER SCOPE IN ITS INNER SCOPE
//--------------------- MORE PRECTICAL EXCAMPLE

function multiplier(x){
    function times(y){
        return x * y
    }
    return times
}

const double = multiplier(2);

console.log(double);

console.log(double(3));
console.log(double(5));

const triple = multiplier(3);
console.log(triple);

console.log(triple(3));
console.log(triple(5));

// For this example, we  wil update the value of the outer function scope variable via closure

function counter(step=1){
    let counter = 0;
    console.log('Counter Hit!')
    function closureFunc(){
        counter += step
        console.log(`closureFunc has been executed. Counter: ${counter}`)
    }
    return closureFunc
}

const stepByOne = counter();

console.log(stepByOne);

stepByOne();
stepByOne();
stepByOne();
stepByOne();
stepByOne();
stepByOne();
stepByOne();
stepByOne();
stepByOne();
stepByOne();


const stepByFive = counter(5);
console.log(stepByFive);

stepByFive();
stepByFive();
stepByFive();
stepByFive();
stepByFive();
stepByFive();
stepByFive();

// -------------------------- IIFE - Immediately invoked function express ------------------------------------------//

const stepCounter = (function(step=1){
    let counter = 0;
    const insideFunc = function(){return counter += step}
    return insideFunc
})(5)

console.log(stepCounter);
console.log(stepCounter());
console.log(stepCounter());
console.log(stepCounter());
console.log(stepCounter());
console.log(stepCounter());
console.log(stepCounter());
console.log(stepCounter());
console.log(stepCounter());
console.log(stepCounter());
console.log(stepCounter());