//Player Class
//Create a constructor function or ES6 class for a Player object. The Player object should have the following
//properties:
function Player(name, weapons){
    //Name: Holds the name of the player. Pass into the constructor.
    this.name = name;
    //Health: Defaults to 10, do not pass into the constructor, just define and set to 10 in the constructor
    this.health=10;
    //Strength: Defaults to 2
    this.strength=2;
    //Weapons: An array of weapons objects. Should be passed into the constructor.
    this.weapons = weapons;
}
//Weapon Class
//Create a constructor function or ES6 class for a Weapon object. It should have the following properties:
function Weapon(name){
  //Name: Holds the name of the weapon. Passed into the constructor.
  this.name=name;
  //Damage: Defaults to a random number between 1 and 5, do not pass into the constructor, just define in the constructor and set it.
  this.damage=Math.floor((Math.random()*5)+1);
}

//Minion Class
//Create a constructor function or ES6 class for a Minion object. The Minion object should have the following
//properties:
function Minion(){
  //Name: Default to “Minion”
  this.name="Minion";
  //Health: Default to 5
  this.health=5;
  //Strength: Default to 2
  this.strength=2;
}
//Game Class
//Create a constructor function or ES6 class for a Game object.
//Give it the following properties:
function Game(){
//Players: An Array to hold the players, Initialize it in the constructor to an empty array
this.players=[];
//Minions: An Array to hold Scarlet Bytes minions. Initialize it in the constructor to an empty array
this.minions==[];
}
//B. Methods to add (25 Points)
//Player Class
//Add a function to the Player prototype called "applyDamage". The function takes as input an integer and subtracts
//that amount of points from the players health property. Displays the message “{Player Name} has sustained
//{damage} amount of damage.” Where you see a value inside of {}, display the value from the object or calculated
//value.
Player.prototype.applyDamage = function (damage) {

}
//Add a function to the Player prototype called “isAlive”. This function checks if the players health value is greater
//than 0 and returns true if it is and false if it isn’t.
Player.protototype.isAlive = function () {

}
//Add a function to the Player prototype called “attackWith”. This function should use a random number between 7
//and 0, to select a weapon from the weapons array property, at that index and returns that weapon.
Player.prototype.attackWith = function () {

}
//Minion Class
//Add a function to the Minion prototype called "applyDamage". The function takes as input an integer and subtracts
//that amount of points from the minions health property. Displays the message “{Minion Name} has sustained
//{damage} amount of damage.” Where you see a value inside of {}, display the value from the object or calculated
//value.
Minion.prototype.applyDamage = function(){

}
//Add a function to the Minion prototype called “isAlive”. This function checks if the minions health value is greater
//than 0 and returns true if it is and false if it isn’t.
Minion.prototype.isAlive = function(){

}
//Add a function to the Minion prototype called “attack”. This function takes as input a player and calls the
//applyDamage of the player, using the minions strength as the input.
Minion.prototype.attack = function(){

}
//Weapon Class
//Add a function to the Weapon prototype called "attack". The function takes as input a player, and a minion.
Weapon.prototype.attack = function(){
//The attack function should implement the following algorithm:
//In a loop, while both the player and the minion are alive, do the following:
//1. Calculate the actual damage by multiplying the strength of the player times the damage value of the weapon.
//2. Call the applyDamage function of the minion object and pass it the actual damage value you just calculated.
//3. Call the isAlive function of the minion object. If the minion is dead, exit. If the minion is not dead, call the
//attack function of the minion and pass it the player object.
}
//Game Class
//Add a function to the Game class prototype called “createMinions”.
Game.prototype.createMinions = function(){
//In this function, use a loop to create 20 minions and populate the minions array property.
}
//Add a function to the Game class prototype called “createPlayers”. In this function, do the following:
Game.prototype.createPlayers = function(){
//Create a variable called “weaponsCache” and assign it 8 weapons from the Weapons discussion forum.
//Make sure you create and post your weapon in the forum.
//Populate the games players array. Use at least 5 of your classmates characters posted to the character
//discussion board in the course. Make sure you post the code to create a character representing yourself in
//the discussion board. For example, when you go to the discussion board, you will see a character for me and
//you can add that as a line in your createPlayers function.
this.Players.push(new Player("Berserk", weaponsCache));
this.Players.push(new Player("Archer", weaponsCache));
this.Players.push(new Player("Doctor Punchette", weaponsCache));
this.Players.push(new Player("Knight", weaponsCache));
this.Players.push(new Player("Drowned Man", weaponsCache));
}
//Add a function to the Game class prototype called “play”.
Game.prototype.play = function () {
    //In this function, implement the following algorithm:
    //Display “Simulating Battle”
    console.log("Simulating Battle");
    //Call the “createMinions” function to create the minions.
    this.createMinions();
    //Call the “createPlayers” function to create the players.
    this.createPlayers();
    //While all minions are alive and there are still players alive:
    //Select a random player from the player array
    //Select a random minion from the minon array
    //Call the attackWith Method on the player, to get a weapon to attach with.
    //Call the attack method on the weapon and pass it the current player and current minion.
    //When the loop is completed, display a list of all players currently alive and if there are more players left
    //than minions, display “Congratulations, you have defeated Scarlet Byte.”
}


//C. Test Program
//15 points :Create an instance of the Game class and call the play function.
//5 points: Create a player instance to represent you and post in the forum
//5 point: Create a weapon instance and post in the forum.
