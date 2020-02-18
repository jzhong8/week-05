// This is a print statement to the cole
// console.log("Hello World!");

// This is an example of variables using 'var'
// var x = 3;
// var y = x + 2;

// console.log(y);

// y = "Hello";

// console.log(y);

let x = 3;
let y = x + 2;

console.log(y);

y = "Hello";

console.log(y);

//

const today = "2020-02-18";

console.log(today);

// today = "2020-02-19";
// Can't rewrite or change a 'const'
// So use 'const' at first, backtrack then change whatever needs to be changed to 'let'


// Types

// number
let apples = 3;
console.log(apples);

// string
let name = "Janine";
console.log(name);

let quote = 'He said “Hello”.';
console.log(quote);

let sentence = "He's going to the \"store\"."
console.log(sentence);


// only backtick symbol can combine
// template string
let last_name = "Zhong"
console.log(last_name);

let full_name = `${name} ${last_name}`;
console.log(full_name);

// variable names can not have spaces
// use underscore or camel case

// Boolean
let isOver18 = true;
console.log(isOver18)

let isTeslaOwner = false;
console.log(isTeslaOwner)

// undefined
let awesome;
console.log(awesome)

// null
let winners = null;
console.log(winners);

//
let groceries = [
    "apples",
    "orange",
    "celery",
    "pineapple",
];

console.log(groceries);

console.log(groceries.length);

// index starts at 0, apples is the 0th item in groceries
console.log(groceries[0]);
console.log(groceries[3]);
console.log(groceries[2]);

groceries.push("eggs");

console.log(groceries);

groceries.push("bread","butter");
console.log(groceries);

// pop removes the last item and returns it
console.log(groceries.length);

let justBought = groceries.pop();

console.log(groceries.length);
console.log(justBought);

// Objects
let person = {
    name:{
        first: "Janine",
        middle: null,
        last: "Zhong",
    },
    // firstName: "Janine",
    // middleName: null,
    // lastName: "Zhong",
    dateOfBirth: "10-26",
    hair: "dark brown",
    hairStyle: "straight",
    favColors:[
        "blue",
        "purple",
        "cream",
        "white",
    ]

};

console.log(person.name.last);
console.log(person.favColors[2]);

console.log(person.dateOfDeath);

person.dateOfDeath = "2120-02-18";
console.log(person.dateOfDeath);

person.dateOfDeath = null;

console.log(person.dateOfDeath);
