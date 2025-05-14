/**Clouser function : function declared within and function. function returning function.
 *  lexical function function is to holds the value of primary value. 
 * also known as Lexical function
 *  mainly used in asynchronous programming
 * 
 */


// Yes, in JavaScript, closures are often related to functions inside functions, but the key concept behind closures is that an inner function can "remember" and access variables from its outer function even after the outer function has finished executing.


// const functionA = () => {
//     console.log('I am in functionA');

//     const functionB = (arg) =>{
//         console.log('I am in functionB with params:', arg);
        
//     }
//     functionB(true)
// }



// let res = functionA()
// functionB(res);

// console.log('I am the last line');



/**Callback Function
 * call bind and apply. These are method used to manipulate this keyword.
 * arrow fucntion doesnot allow this.name . we need to use general function
 * 
 * set time out
 * set interval
 * 
 * digital clock
 * 
 *  pooling
 *  bi-directional conversatation
 *      socket programming
 */

const handler = () =>{
    console.log(i+' I am inside handler');
    
}


/** Most used loop function in JS
 *  arr.forEach((value, index)=>{})  => combination of for..in and for...of loop
 *  
 *  arr.map((value, 1)=>{})  => returns new array and value. In JSX only map loop is used .
 *  .map returns the value.
 *  
 * 
 */


// .filter
// returns true value or false value i.e boolean value
// let num = [1,2,3,4,5,6,7,8,9,10]



// let even = num.filter((val) => (val%2 === 0))


// .reduce 
// take three arguments (prev, curr, index) => use _ if you don't need argument . ( prev , _ , index)
// without initial value index stars from 1
// last vlaue is sotried in variable


// array.fill()
// [...Array(10)]
// In react we can only use .map loop function so when we need to iterate like 10 values.
// we used array(10) with spread ...
// this will give us 10 index with empty or undefined value


// other function
// some  => or
// every  => and

// let totalSum  = [...Array(40)]


let arr = [ 1, 2, 3]
let key = 1;

let booleanEvery = arr.every((val)=> val === key) // It checks each val with and operator key like 1 === 1 && 2 === 1 && 3 === 1
console.log(booleanEvery);

let booleanSome = arr.some((val)=> val === key) // checs each val with key with or operator 1 === 1 || 2 === 1 || 3 === 1
console.log(booleanSome);













