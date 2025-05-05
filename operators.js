/**a. Arthemetical or Mathematical Operators
 *  +   -   *    /    %
 *  % is modulus
 * 
 *  Increment or Decrement 
 *  ++.  --
 * 
 * 
 * b. Assignment Operator
 *  +=  -=    *=  /=
 * 
 * c. String / concatination
 *     +
 * 
 * d. Comparision  Operator
 *    >    <    >=    <=    !=     ===    !==
 * 
 * sricter comparator also check data type and value.
 * other only value
 * Example
 * 10 + '10'
 * 
 * 
 * e. Logical Operator
 *  &&    ||   !
 * 
 * !x   x is not undefined/falsy value
 * 
 * 
 * f. Ternary or conditional Operator
 *    (exp)  ? true : false;
 *  
 *      Type
 *    i. Nullish coalescing Operators  (??)   Provide default Value instead of null or undefined
 *         let result  = value ?? defaultValue;
 * 
 * 
 * g.  Object / Array Destructure  (Very Imprtant)
 * 
 * h. Spread and rest operator
 *    ...
 * 
 * i. bitwise operator
 *  &    | 
 * 
 *   4 & 5
 * 
 *      0100
 *      0101
 *      _______
 *  0100 => 4
 * 
 * 
 */


let a = 10;
let b = 3;

let c = a % b;
console.log(c);  //1


//Increment
// a = 10

a = a + 1 // a = 11
//post assign
a++
console.log(a++);  // console.log then a + 1
//a +1

//pre assign
++a   // a + 1 then console log


// IN one line there should only be 90 - 100 words
//msg += 



//Desturcting

let fullName = ['John','Rai']
// let firstName = fullName[0]
// let lastName = fullName[1]


const [firstName, lastName] = ['John ', ' Rai']

//allasing (:) It is just like as in sql . renaming.  WE use semi-colon for aliasing.
//for eg:  let {fullName : fName, dateOfBirth : DOB}  = userAdmin
//let {phone, email, address : tempAddress}  = userObj

//encapsulationg   // response.data.response.data.userData

//destructure within desturecture
//let {phone:{mobile, tel}}   depth desturcture
//object desturcture

let response = {
    data{
        response{
            result{
                user{
                    name: 'sandesh'
                }
            }
        }
    }
}

let {data:{response:{result:{user:{name : userName}}}}} = response
console.log(userName);

//use {} for object and [] for array while destructuing

//key destroued while destructuing





// Spread and rest operator  . for array and object only

// let adminUser2 = adminUser   // also copies ref  mean path// shallow copy  // changees also primary source


//Use spread

let adminUser = {
    fullName : 'sandesh bhattarai',
    email: 'sandesh@gmail.com'
    phone:{
        mobile: 989898989,
        tel: 989998985465
    }
}

let adminUser2 = {
    ...adminUser
}


//rest
let {fullName, phone, ...rest} = adminUser // rest of the value stays in rest



















