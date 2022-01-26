console.log('Hello I  am an array method file!')

let names = ['Jim', 'Andy', 'Dwigth', 'Pam', 'Angela'];

// Standard Loop
for (let i = 0; i < names.length; i++){
    console.log(names[i]);
}

for (let n of names){
    console.log(n);
}
// Array Methods//

///////////////////////////////////////
// Array.prototype.forEach(callbak)//
/////////////////////////////////////

function callBack(el, i, arr){
    console.log(el, i, arr)
}

names.forEach(callBack);

// As an arrow Function
names.forEach((e, i, a)=>{console.log(e, i, a)})


//////////////////////////
// Array.prototype.map()//
//////////////////////////

let myNumbers = [2, 4, 6, 8, 10]

function squareOrCubeNum(x, idx, arr){
    console.log(arr)
    if (idx % 2 === 0){
        return x ** 2
    } else {
        return x ** 3
    }
}

myNumsSquared = myNumbers.map(squareOrCubeNum);
console.log(myNumsSquared);

// Same as above but As an arrow function
let exponenNums = myNumbers.map((v, i) => i%2===0 ? v**2 : v**3);
console.log(exponenNums)

console.clear()
//////////////////////////////
// Array.prototype.filter()//
////////////////////////////
let cities = ['Chicago', 'Charlotte', 'Boston', 'Columbus', 'Austin']

function isCName(city){
    return city[0] == 'C'
}
//Arrow Function
let cNameCities = cities.filter(isCName);
console.log(cNameCities);

let oCities = cities.filter(city => (city.includes('o')))
console.log(oCities);

////////////////////////////
//Array.prototype.filter()//
///////////////////////////

let newNums = [5, 10, 15, 20, 25, 30]
function myReducer(prev, curr){
    console.log(prev, curr);
    return prev + curr
}

let numsReduced = newNums.reduce(myReducer);
console.log(numsReduced);
// Shorter version
let totalSum = 0;
for (let n of newNums){
    totalSum += n
}
console.log(totalSum);
//////////////////////////
//Array.Prototype.slice//
////////////////////////

let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
console.log(colors)
console.log(colors.slice(2));
console.log(colors.slice(2, 6));
console.log(colors.slice(1, -2));
console.log(colors.slice(2, -1));
console.log(colors.slice(3, -3));

console.clear()

//////////////////////////////
// Array.prototype.splice()//
////////////////////////////

console.log(colors)
colors.splice(2, 2)
console.log(colors)

let deletedColors =colors.splice(2, 0, 'Pink', 'Black', 'Turquoise')
console.log(colors)

//Array.pop

let lastColor = colors.pop();
console.log(colors);
console.log(lastColor);

//Array.push

let newLength = colors.push('White');
console.log(colors);
console.log(newLength);
