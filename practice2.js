// function outer(){
//     console.log('I am outer function');
    
//     function inner () {
//         console.log('I am inner function');
//     }

//     return inner
// }

// let result = outer()
// result()


// Learning concept from youtube

// function alertFun (message){
//     return () =>{
//         console.log(message);
        
//     }
// }
// const alertMom = alertFun('hi mom');
// alertMom()

// Task from youtube

// for (var i = 0; i < 3; i++){   // var is function scoped and global scoped. so it runs outer first i.e. hoisting. that's why it loops first and it stores the new value too. that's why when it gets to settimeout the i become 3 and run 3 three times.
//     const log = () =>{
//         console.log(i); // 
        
//     }
//     setTimeout(log, 100)
// }

// it logs three 3 as the output because the var is function scope 





// practice
