//Daniel Rogers - #528292 - COP2801
//The volume occupied by and ideal gas is found from the equation:
//V = nRT/P
//Program computes and prints V = nRT/P for a
//series of pressures using:
//n = 1, n is the number of kmols
var t = 273.15; //  T is the temperature in kelvins
var r = 8.3144; //kPA-m3

function pressureGenerator(){
  //Create an empty array
  var pressures = [];

  //Loops to create 20 random numbers
  for(var count = 0; count < 21; count++){
  //generates a random number between 1 and 10000
  var pressure=Math.floor(Math.random() * 10000) + 1;

  pressures.push(pressure);
  }
  //returns an array of 20 random pressure values
  return pressures;
}

var pressures = pressureGenerator();
//Displays the pressures and resulting volumes
console.log("Gas" + "\t" + "Pressure" + "\t" + "Volume");


for(var gas = 1; gas <= 20; gas++){
  var volume = (t*r)/pressures[gas];
  console.log(gas + "\t" + pressures[gas] + "\t" + volume);

}
