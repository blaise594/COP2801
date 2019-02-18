//Daniel Rogers - #528292 - COP2801

function gcd(u, v){
  //if v equals 0 the gcd is equal to v
  if(v==0){
    return u;
  }
  //while v is not equal to 0
  while(v!=0){
    var temp = u % v;
    u = v;
    v = temp;
  }
  return u;
}
//Call function, print result
console.log(gcd(150, 35));
