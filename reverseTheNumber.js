var readlineSync = require('readline-sync');
var numberToBeReversed = readlineSync.question("enter number : ");
console.log(numberToBeReversed);

var temp = 0, reversedNumber =0 ;
temp = numberToBeReversed ;

while(numberToBeReversed > 0){
 
  reversedNumber = reversedNumber * 10 + numberToBeReversed % 10;
  // console.log(reversedNumber);

    numberToBeReversed =Math.trunc(numberToBeReversed / 10 ) ;
  // console.log(numberToBeReversed);
}
console.log("Number entered by user is : " + temp);
console.log("reversed Number is : "  + reversedNumber);