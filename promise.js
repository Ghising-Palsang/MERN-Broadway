// async programming
// Promise
// objct data type
    // 3 phase
    // pending
    // fulfill / reject
    // settlement

    // .then
    // .catch
    // .finally


// in promise we use function not variable generally ? 
// so creating promise inside function make it reusable 
// async - await

function fetchData (){
    return new Promise ((resolve, reject) => {
        setTimeout(()=>{
            resolve('Succeded')
            // reject('error')
        },1000)
    })
}


async function getData(){
    try{
        const result = await fetchData();   
        console.log(result);
        
    } catch (error){
        console.error('Error', error)
    }
}

getData()





function fetchNewData (){
    return new Promise ((resolve , reject)=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
            if(!response.ok){
                reject('Failed to fetch data')
            }
            return response.json()
        }).then(data => {
            resolve(data)
        }).catch(error => {
            reject('Error', error)
        })
x
    })
}

async function getNewData (){
    try{
        const result  = await fetchNewData()
        console.log(result);
        
    }catch(error){
        console.log(error);
        
    }
}

getNewData()