console.log("Hello World!!!")

// Variables
// Var, Let and const
// Declare Variable

let myName;
let myAge;

// initialize variable
let nickName = "Mathew";
console.log(nickName)

// updating Variable
nickName = "Mathew Change Name!"
console.log(nickName)

// Variable Types
let myNewAge = 23;
let message = "Hello"
let checked = true;
const x = null;
const y = undefined;

console.log(typeof(myNewAge))
console.log(typeof x)
console.log(typeof y)


// Arrays
let numArray = [1,2,3];
let stringArray = ["cat", "dog", "snake"];
console.log(numArray)
console.log(stringArray)
// Accessing Arrays
console.log(numArray[0])
console.log(`I love my ${stringArray[1]}`)

// objects in Javascript
let animalDict = {
    name : 'Dog',
    type : "Domestic Animal"
};

console.log(animalDict.name, animalDict.type)

const a = 1;
// a = 2;
// a constant can't be modified so if a=2 is 
// uncommented it will cause an error
console.log(a);

let n = '7';
console.log(typeof n);
sum = Number(n) + 3;
// sum = n + 3; 
// this will add to 73 because 3 is a string
console.log(sum);
// clg: for console.log()
// console.log(n);
// console.clear()

// Aritmetic Operations
console.log(2+3);

function console1(arg){
    console.log(arg);
}

console1(2**4);
console1(2+5);

console.clear();

function name1(a,b){
    a += b;
    return a;
}

console.log(name1(3,4));


const btn = document.querySelector("button");
const txt = document.querySelector("p")

btn.addEventListener('click', showResults);

function showResults(params) {
    if(btn.textContent === "Start"){
        btn.textContent = "Stop"
        txt.textContent = "Started..."
    }
    else{
        btn.textContent = "Start"
        txt.textContent = "Stopped!"
    }
}

// Handling Strings
// single vs double quotes

const sgl = 'single quotes';
const dbl = "double quotes";
console.log(sgl);
console.log(dbl);

// Escaping characters
const bigmouth = 'Ive got no right to take my place';
console.log(bigmouth);

// concatenating Strings
const greeting = `Hello`;
const name12 = 'Chris';
const greeting1 = `Hello, ${name12}`;
console.log(greeting1);
