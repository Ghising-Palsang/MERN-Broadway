/**Promise 2 
 * 
 * 
 * promise nesting 
 * promise chaining => better way if there is many function . avoids messy nesting
 * 
 *  Promise.all
 *  Promise.allSettled
*/


function validation (x){
    return new Promise((res, rej)=>{
        if(x){
            res('success')
        }else{
            rej('rejected')
        }
    })
}
function login (x){
    return new Promise((res, rej)=>{
        if(x){
            res('logged')
        }else{
            rej('rejected')
        }
    })
}
function accessTo (x){
    return new Promise((res, rej)=>{
        if(x){
            res('access granted')
        }else{
            rej('rejected')
        }
    })
}
function accessToAdmin (x){
    return new Promise((res, rej)=>{
       if(x){
        res({
            message: 'I am resolve of validation'
        })

       }else{
        rej({
            message: 'I am exception '
        })
       }
    })
}
    

// if one get's false all are rejected
validation(true)
.then((res) => {
    console.log(res);
    return login(true)   
}).then((res)=>{
    console.log(res);
    return accessTo(true)
}).then((res)=>{
    console.log(res);
    return accessToAdmin(true)
}).then((res)=>{
    console.log(res);
    
})

.catch((exception)=>{
    console.log(exception);
});





// array of promise , we use promise.all and promise.allSettled . 
// promise.all
// when prmoise are not dependent


// OOP



//promise nesting
//promise chaining
// promise array - Promise.all    Promise.allSettled
// async await 



async function handler () {
    try{
        let result = await fetch()
        console.log(fetch);
        
    }
    catch(err){
        console.log('Network error', err);
        
    }
}



function eatFood (x){
        if(x){
            return Promise.resolve({
                message: 'solved'
            })
        }else{
            return Promise.reject()
        }
    
}

async function(x){
    if(x){
        return{
            message: 'Granted'
        }
    }else {
        throw{
            reason: 
        }
    }
}

// Practice

function eatFood (x) {
    return new Promise((res, rej)=>{
        if(x){
            res({
                message: 'Ate food'
            })
        }else{
            rej({
                message: 'No food'
            })
        }
    })
}
function drankJuice (x) {
    return new Promise((res, rej)=>{
        if(x){
            res({
                message: 'Drank Juice'
            })
        }else{
            rej({
                message: 'No juice'
            })
        }
    })
}
function Sleep (x) {
    return new Promise((res, rej)=>{
        if(x){
            res({
                message: '8 hour sleep'
            })
        }else{
            rej({
                message: 'No sleep'
            })
        }
    })
}


// eatFood(true)
// .then((res)=>{
//     console.log(res);
//     return drankJuice(true);
// }).then((res)=>{
//     console.log(res);
//     return Sleep(true)
// }).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })


async function handlePromises () {
    let arr = [eatFood(true), drankJuice(true), Sleep(true)];
    try{
        let result = await Promise.all(arr);
        console.log(result);
    }catch(err){
        console.log(err);
        
    }
}

handlePromises()

// Promise.all is a asynchoronous function so to handle it we 
