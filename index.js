var readlineSync = require('readline-sync');
var arrayLength = readlineSync.question("array length :");
console.log(arrayLength);
var arr = [] ;

for(let i = 0 ; i < arrayLength ; i++){
  arr[i] = readlineSync.question( i+1 + " :");
}

function printMyArray(arr ,arrayLength){
      var str = "";
      for(let i = 0 ; i < arrayLength ; i++){
        str = str +" " + arr[i];
      }
      return str;
}
var arrayList = printMyArray(arr, arrayLength);
console.log("Array entered : " + arrayList);

function reverseArray(arr, start , end){
    if(start >= end)
      return;
      var temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
    reverseArray(arr , start+1 , end-1)
}

// var j = arrayLength -1 ; 
// for(let i = 0 ; i < arrayLength/ 2; i++){
//   var temp = 0 ;
//   temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp ; 
//   j--;
//   } 

var start = 0 , end = arrayLength - 1 ;
reverseArray(arr, start , end);
var arrayList2 = printMyArray(arr, arrayLength);
console.log("reversed Array :" + arrayList2);