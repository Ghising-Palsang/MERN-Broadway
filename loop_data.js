let products = [
    { 
        name: "Product One",
        price: 1000,
        discoutn: 10
    },

    {
        name: "Product One",
        price: 1000,
        discoutn: 10  
    },
    {
        name: "Product One",
        price: 1000,
        discoutn: 10    
    }
 ];


 let discountAmt = 0
 let afterDiscount = 0

 for(let i=0; i<products.length;i++){
    discountAmt=(products[i].price * products[i].discoutn) / 100;
    afterDiscount = products[i].price - discountAmt;
    products[i].discountAmit = discountAmt;
    products[i].afterDiscount = afterDiscount;
    
 }



 // Print the array into following format

//  for(let i = 0; i<products.length; i++){
//     let prod = products[i]
//    console.log(`Product Name: ${products[i].name}`);
//    console.log(`Product Price : Npr. ${products[i].price}`);
   
   
//  }

for(let i in products){
    let prod = products[i]
   console.log(`Product Name: ${prod.name}`);
   console.log(`Product Price : Npr. ${prod.price}`);
   
   
 }
 for(let prod of products){
    let prod = products[i]
   console.log(`Product Name: ${prod.name}`);
   console.log(`Product Price : Npr. ${prod.price}`);
   
   
 }


 // for in & for of loop for array data only



 