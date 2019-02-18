//Daniel Rogers - #528292 - COP2801
//Program simulates taking current and voltage readings from a circuit and calculates
//the average power of the circuit.
//Computes the average power for each day and displays it in a tabular format
function voltGenerator(){

  //Create an empty array
  var volts = [];

  //Loops to create 24 random numbers
  for(var count = 0; count < 24; count++){
    //generates a random number between 5 and 20
    var volt=Math.floor(Math.random() * 16) + 5;

    volts.push(volt);
  }
  //returns an array of 24 random volt values
  return volts;
}

function ampGenerator(){
  //create an empty array
  var amps = [];
  //Loops to create 24 random numbers
  for(var count = 0; count < 24; count++){
    //generates a random number between 1 and 10
    var amp=Math.floor(Math.random() * 10) + 1;

    amps.push(amp);
  }
  //returns an array of 24 random amp values
  return amps;
}

var volts = voltGenerator();
var amps = ampGenerator();

console.log("Hour" + "\t" + "Current" + "\t" + "Voltage" + "\t" + "Power");
var count=0
//create accumulator to store sum of power values
var powerSum = 0;
for(var hour = 1; hour < 25; hour++){
  // The power is the amps at a given hour times the voltage at the same hour.
  var power = amps[count] * volts[count];
  powerSum += power;
  console.log(hour + "\t" + amps[count] + "\t" + volts[count] + "\t" + power);
  count++;
}

//Calculates the average power consumed for the day and displays it at the end.
console.log("Average Power: " + powerSum/24 + " watts");
