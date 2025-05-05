/**Also known as The decision making statements
 * 
 * We can control flow 
 * Direction provide
 * 
 * -If-else statements
 * -Else-if statements
 * - Switch statements
 * 
 * -Loop
 */

//Syntax
if(expression){
    // true block of code runs
}else{
    //optional block
}

//turthly value
// true, not null, any number except 0, varible containing values or defined
//falsy value
// -null, flase, 0, empty variable, undefined

if(x){

}else{

}

// let x = [] is also true because x varibale is occupied


//Create a JS vairble to store the name of a day (sunday till saturday)
//Print the following:
    //If day ======= saturday or sunday =====> print Holiday
    //If day ======= Friday =======> Print weekend
    //If day ======= Other than those =====> print weekday

//Use only if-else

let day = 'friday';

if(day === 'friday'){
    console.log('weekend');
    
}else if (day === 'saturday'){
    console.log('Holiday');
    
}else{
    console.log('weekday');
    
}


//Switch Case
switch(day){
    case 'friday':
        console.log('weekend');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Holiday');
        break;
    default:
        console.log('weekday');
        break;
        
}



// Task
// Create a js object named student with name, email, marksObtained as a number value
// Assign some static value to the student variable
// Consider total as 500
// Print the percetage and division based on the marksObtained by following break down
// If percentage is >= 80 : Distinction
// >= 60 and <= 80 : first division
// 45 to 60 : second division
//32 to 45 : third division
// < 32 : failed

// Percentage = marksObtained / total * 100

let student1 = {
    name: "Tom",
    email: "tom@gmail.com",
    marksObtained: 375,
  };
  
  let { marksObtained } = student1;
  let totalMarks = 500;
  let percentage = (marksObtained / totalMarks) * 100;
  
  if (percentage === 80) {
    console.log("Distinction");
  } else if (percentage >= 60 && percentage <= 80) {
    console.log("First Division");
  }
  
  switch (true) { // That below true is compared with this switch.  It should be comparable. Here switch value should always be true to get stated.
    case percentage >= 80: //this returns boolean true
      console.log("Distinction");
      break;
  }
  

// Task 2
  // Calculate electrucity bill amount to be paid based on the following:
  // Conside total units consumed to be some non negative numeric value.
  // The bill amount to calculate has to follow the following:
  // If total units consumed is <=30, a lumsum amound of Npr. 80 has to be paid.
  // For next 20 units , the rate is Npr 4.5 / unit
  // nes 30 unit, 5/unit
  // next 50 units, 7.5unit
  // next 100 units, 12 /unit
  // next 200 , 15/unit
  //for above any, 25/unit

  // What will be the bill amound if, unit consumed are
  // a. 25 b. 37 c. 65 d. 100 e. 120 f. 223 g. 350 h.457

  let unit = 223;

  let next20 = (unit - 30) * 4.5 + 80;
  let next30 = (80 + (20*4.5)) + (unit - 50) * 5         
  let next50 = (80 + (20*4.5) + (30 * 5)) +(unit - 80) * 7.5 
  let next100 = (80 + (20*4.5) + (30 * 5) + (50 *7.5)) + (unit - 130) * 12
  let next200 =   (80 + (20*4.5) + (30 * 5) + (50 *7.5) + (100 * 12)) + (unit - 230) * 15
  let nextAbove =  (80 + (20*4.5) + (30 * 5) + (50 *7.5) + (100 * 12) + (200 * 15)) - (unit - 430) * 25                           

  if(unit <=30){
    console.log(`The total electricity cost is 80`);
  }else if(unit >30 && unit <=50){
    console.log('The total electricity cost is ',next20);
  }else if(unit>50 && unit <= 80){
    console.log('The total electricity cost is ',next30);
  }else if(unit> 80 && unit<=130){
    console.log('The total electricity cost is ',next50);
    
  }else if(unit >130 && unit<= 230){
    console.log('The total electricity cost is ',next100);
    
  }else if (unit>230 && unit<=430){
    console.log('The total electricity cost is ',next200);
    
  }else if(unit>430){
    console.log('The total electricity cost is ',nextAbove);
  }


