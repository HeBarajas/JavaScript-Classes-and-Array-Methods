console.log('Hello this is the callbacks');
// JavaScript Callback Function
/*
    Simply put: A Callback is a function that is to be executed after another
    function has finished its execution - hence the name callback.

    More Complex Definition: In JavaScript, functions are objects. Because of this,
    functions can take other functions as arguments(parameters), and can return functions
    by other functions.

    Functions that do this are called "higher - Order functions". Any function,
    that is passed as an argument is called a "Callback function".

    SOOOO...why do we need them?

    The reason for this is, because of the JavaScript Event Loop. In a nutshell
    JavaScript is an event driven language so this means, that instead of waiting for 
    a response before moving on, JS will keep executing while listening for other events.
*/

function greeting(name){
    alert('Hello ' + name)
}

function processUserInput(callback){
    var name = prompt("What is your name? ");
    callback(name)
}

function leaving(name){
    alert('Goodbye ' + name)
}

// processUserInput(greeting);
// processUserInput(leaving)
// --------------------------------------------------------------------------------------------------------------------- \\

// Basic Callbacks

let myButton = document.getElementById('btn');
console.log(myButton);

function buttonClicked(){
    console.log("The Button has been clicked!")
}

myButton.addEventListener('click', buttonClicked )