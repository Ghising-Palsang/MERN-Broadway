/** Function
 * 
 *  - function and object approach -> Either one
 *  
 *  A function can take anything as an input
 *  A function can return anything as an output
 * 
 *   
 */

// const addTwoNumbers = (a,b) =>{
//     let c = a + b;
//     return c;
// }

// let result = addTwoNumbers (10, 20)
// console.log(result);

// one liner
const addTwoNumbers = (a,b) => a + b;

const user = {
    name: 'Sun',
    getName: function (){
        return this.name        // we use general function in object not an arrow one as we 
                                // can use this variable to point object name.
    }
}

console.log(user.getName());

function greet(greeting , punctuation){
    console.log(greeting + ',' + this.name + punctuation);
    
}
    
// greet.call({name:'mon'},'hello','...')
// greet.apply({name :'mon'},['hello','...'])

const greetMing = greet.bind({name:'mon'})
greetMing('hello','!')


// Recursive
// Clusure
// Callback
// Async
    // Promise based
    // then().catch().finally()
    // Async await