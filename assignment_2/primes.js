//Daniel Rogers - #528292 - COP2801
//Program finds and displays all prime numbers up to n = 150.
var n = 150;
//Step 1:  create an array of consecutive integers from 2 to n.
function intArrGenerator(n){
  //creates an empty array
  var intArr = [];
  //creates an accumulator
  var count = 2;
  while(count<=n)
  {
    intArr.push(count);
    count++;
  }
  return intArr;
}
//creates an array of n integers
var intArr=intArrGenerator(n);


//Function checks to see whether a number is prime, acts as the inner loop
function primeChecker(numberToCheck) {
    //let p equal 2, the first prime number.
    for(var p = 2; p < numberToCheck; p++) {
        if(numberToCheck % p === 0) {
            return false;
        }
    }
}
//set counter/index to 0
var count = 0;
while(count<=149){
  var numberToCheck = intArr[count];
  //passes number to check into primeChecker() function
  var isPrime = primeChecker(numberToCheck);
  if(isPrime==false){
    intArr[count]=false;
  }

  count++;

 }
//Displays the ending array with non-prime numbers marked false
//console.log(intArr);
//foreach loop iterates through array elements
intArr.forEach(function(element) {
  //if element is not false print
  if(element){
      console.log(element);
  }

});
