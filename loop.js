/**Loop
 * 
 * -Iteration
 * -Repitation
 * 
 * looking for common pattern to see if it's loopable
 * 
 * - Types of Loop
 * ---- Basic loop. Not commonly used
 * - do-while loop
 * - while loop
 * - for...in
 * - for...of
 * 
 * 
 * --- Used loop
 * - .map() , .forEach(),   .filter(),   .reduce,   .every(),    .some()
 * - Callback function
 * 
 * 
 */

// let i =1;
// console.log('****** Do-while loop *********');
// do{
//     console.log(i);
//     i++;
// }while(i <= 5)


    
//     console.log('****** while loop *********');
  
//        while(i <= 5){
//         console.log(i);
//         i++;

//        }

    // there is something called continue like break;


// while loop uses
// -CSV (xls) data - Data from excel sheet
//  * -file import -> we use stream
//  * - we use while loop here. for bulk of code



// Dry run test - to check loop

// loop          i variable            comparision        after change      output
//    1             1                    true                2                 2
//   2              2                    true                3                  3


// Dry run test in Chatgpt
// To understand how loop is working


//  Task

// Print first 20 even numbers
// let i = 2 ;
// while(i <= 40){
//     console.log(i);
//     i+=2;
// }

// for(let i = 1 ; i<=20; i++){
//     console.log(i * 2);
    
// }


// stack overflow

/** 
 *  *   *   *    *
 *   *   *   *    *
*    *      *   *   * 
 *   *     *     *   *
*/


// for(let i = 1; i <=5 ; i++){
//     let str = '';
//     for(let j =1; j<=5; i++){
//         str += '*  '
//     }
//     console.log(str);
    
// }


let str = '';
for(let i = 1; i<=5; i++){
    str+='*  '
    console.log(str);
    
}



//  Task
// Print the following shapes using loop

for (let i = 0 ; i <=5; i++){
    str = ''
    
}