// Recursive
// Closure
// Callback
// Async
    // Promise based
    // then().catch().finally()
    // Async await

/**
 * 
 * 
 */

// Recursive function => Prints itself as a loop . self calls self. 
// const printTill10 = (i) =>{
//     if(i<=10){
//         console.log(i);
//         i++;
//         printTill10(i)
//     }
// }

// printTill10(1)

// Data Structure => tree data
// Multiple then object inside array

let category = [
    {
        title:'Motors, tools & diy',
        children: [
         {
            title: 'Parts',
            children: [
                {}
            ]
            
         }   
        ]
    },

    {
        title: 'Home & lifeStyle',
        childern: [
            {
                title: ''
            }
        ]
    }

]

let docData = [
    {
        title:'chapter 1',
        section : [
            {
                title: 'chapter : 1.1',
                section : [{
                    title: 'section : 1.1.1'
                }]
            }
        ]
    },
    {
        title: 'chapter 2',
        section:[{
            title: 'section: 2.1'
        }]
    },
    {
        title: 'chapter 3',
        section:[{
            title: 'section: 3.1'
        }]
    }
]

const printCat = (catData, indent = 1) =>{
    if(catData){
        for(let catInfo of catData){
            console.log('\t'.repeat(indent), catInfo.title);
            printCat(catInfo.section, indent + 1)
        }
       
    }
}

for(cat1 of docData){
    console.log(cat1.title);
    if(cat1.section){
        printCat (cat1.section) 
    }   
}


// ============= Task 2 ===================

// let category = [
//     {
//       title: "Electronics",
//       children: [
//         {
//           title: "Sockets",
//           chldren: [
//             {
//               title: "2 pin socket",
//               children: null,
//             },
//             {
//               title: '2 pin socket',
//               children: null
//             }
//           ],
//         },
//         {
//           title: 'Multi-plug',
//           children: null
//         },
        
//       ],
//     },
//     {
//       title: "Home applicances",
//       children: [{
//           title: 'fridge',
//           children: null
//       }, 
//       {
//           title:'television',
//           children: [
//               {
//                   title: '45 inch tv',
//                   children : null
//           },
//           {
//               title: '120 inch tv',
//               children:null
  
//           }
      
//       ]
//       }, 
//       {
//           title: 'kitchen',
//           children : null
//       }],
//     },
//     {
//       title: "Clothes",
//       children: [
//           {
//               title: 'mens clothing',
//               children: [
//                   {
//                       title: 'shirt',
//                       children: null
//                   },
//                   {
//                       title: 'pant',
//                       children: null
//                   },
//                   {
//                       title: 'jacket',
//                       children: null
//                   }
//               ]
//       }, 
//       {
//           title: 'women clothing',
//           children: null
//       }, 
//       {
//           title: 'kids clothing',
//           children: null
//       }],
//     },
//   ];
  
//   const printCat = (catData, indent = 1) =>{
//       if(catData){
//           for(let catInfo of catData){
//               console.log('\t'.repeat(indent),catInfo.title);
//               printCat(catInfo.children, indent + 1)
//           }
         
//       }
//   }
  
  
//   for(let cat1 of category){
//       console.log(cat1.title);
//       if(cat1.children){
//           printCat(cat1.children)
//       }
      
//   }
  


// IIFE --> Ananomous function. for singleton pattern. OOP concept.  
(()=>{
    // Immediately invoked function expression
})()

