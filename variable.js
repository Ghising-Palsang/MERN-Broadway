console.log("Hello World");



/**
 * Multi 
 * line 
 * comment
 * 
 * 
 * single thread program
 * -Thread(process)
 * -REPL
 * - Read, Evaluate , Process, Loop
 * Based on event loop
 * 
 * 
 */



//Data store run time
//Varibale and constants
//Variable can be chaged  
//Scope of variable
//let AND var

var fullName = ''
let name = ''

//Alpha Numeric
//Should always start with alphabet
//can use _ as separater in name
//relevant name use

//ECMA is an community
//JS before 2015 and after ES6 

//JS is a loossely couple dynamically typed programming language 

//cannot be redeclared
let a = 1; // re-declared is error let a = 2;

//can be re-declared
var b = 1;
var b = 2;

//var, function =>global
//declaration and assignment
//JS hoisting => declaration is at top of the code for var, declaration and assignment both in one line in let. that's why in var we get undefined instead of error

//block scope => code inside {} curly braces
let c = 10;

{
    let c = 20; // redeclare in block scipe // if var then {} inside get;s logged
}

console.log(c);


//Constants = used for universal variable and usually written in CAPITAL letter
const GRAVITY = 9.8

//const as a pure constant and const as a variable constant


/**
 * Data types
 * a. String
 * '',"",""
 * 
 * b.Number
 * 123, 123.3, 12e3
 * 
 * c. Boolean
 * true , flase
 * 
 * d. Null
 * 
 * e. Undefined
 * let a;
 * 
 *These above are JS primitives. NOT MIXED UP
 * 
 * f. Array
 * -Collection of data separated by comma, enclosed within [], assigned with index-value pair,index starts from 0
 *  
 * g. object / JSON (js based object notation) JSON is a Universal data
 * -predefined  like console and is used .
 *  -Collection of data separated by comma, enclosed within {}, assigned with key-value pair,keys are custom created 


 */
let e = 'yelo'

console.log(typeof a);
console.log(typeof b);
console.log(typeof e);

let d = [1, 2, 3, 4, 5];
let f = ['red','blue','green'];

console.log(typeof d); //object

let userArr =["alucar", 'alu.gmail.com']

let userObj={
    name: 'alucar',
    email: ' alu.gmail.com'
};


//arrow function
let arrowFunc = () => {};
console.log(typeof arrowFunc); // function is also a data type


