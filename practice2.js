// Function
// function sum (x,y) {
//     let result = x + y;
//     console.log(result);
// }

// sum(2, 2)

// const multiply = (a, b) => {
//    return a * b;
// }   

// console.log(multiply(2,3));

// Callback Function
function hello(callback){
    console.log('Hello!');
    callback()
}

function Bye(){
    console.log('Bye!');
}

hello(Bye)

function add(a, b, callback){
    let result = a + b;
    callback(result)
}

function displayConsole(result){
    console.log(result);
}

add(2,2,displayConsole)

  
