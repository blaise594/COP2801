//Daniel Rogers - #528292 - COP2801

//define function to calculate next evenly divisible multiple of i and j
function findNextMultiple(i, j){
  var nextMultiple = i + j - i % j;
  return nextMultiple;
}

//call function and print results for each number pair
console.log(findNextMultiple(365, 7));
console.log(findNextMultiple(12258, 23));
console.log(findNextMultiple(996, 4));
