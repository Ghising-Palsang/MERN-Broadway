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

let unit = 10;
let billAmt = 0;
// let next20 = (unit - 30) * 4.5 + 80;
let next30 = 80 + 20 * 4.5 + (unit - 50) * 5;
let next50 = 80 + 20 * 4.5 + 30 * 5 + (unit - 80) * 7.5;
let next100 = 80 + 20 * 4.5 + 30 * 5 + 50 * 7.5 + (unit - 130) * 12;
let next200 = 80 + 20 * 4.5 + 30 * 5 + 50 * 7.5 + 100 * 12 + (unit - 230) * 15;
let nextAbove =
  80 + 20 * 4.5 + 30 * 5 + 50 * 7.5 + 100 * 12 + 200 * 15 - (unit - 430) * 25;

if (unit <= 30) {
  console.log(`The total electricity cost is 80`);
} else if (unit > 30 && unit <= 50) {
  billAmt = (unit - 30) * 4.5 + 80;
  // console.log('The total electricity cost is ',next20);
} else if (unit > 50 && unit <= 80) {
  console.log("The total electricity cost is ", next30);
      } else if (unit > 80 && unit <= 130) {
  console.log("The total electricity cost is ", next50);
} else if (unit > 130 && unit <= 230) {
  console.log("The total electricity cost is ", next100);
} else if (unit > 230 && unit <= 430) {
  console.log("The total electricity cost is ", next200);
} else if (unit > 430) {
  console.log("The total electricity cost is ", nextAbove);
}

console.log("The total electricity cost is ", billAmt);
