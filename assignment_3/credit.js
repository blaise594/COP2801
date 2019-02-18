//This program determines the length of time needed to pay off a credit card
//balance, as well as the total interest paid.

//See the sample execution below:
//This program will determine the time to pay off a credit card and the interest paid based on the current
//balance, the interest rate, and the monthly payments made.
//Balance on your credit card: 1500
//Interest Rate: 18
//Assuming a minimum payment of 2% of the balance ($20 min)
//Your minimum payment would be $ 30.00
//  PAYOFF SCHEDULE
//  _________________
//  Year    Balance   Payment Num   Interest Paid
//  1       1,492.50  1             22.50
//          1,484.89  2             44.89
//          1,477.16  3             67.16
//          1,469.32  4             89.32
//  . . .
//  . . .

//  7       517.51    73            1,207.51
//          495.28    74            1,215.28
//          472.70    75            1,222.70
//          449.79    76            1,229.79
//  . . .
//  . . .

//  8       227.51    85            1,277.51
//          200.92    86            1,280.92
//          173.94    87            1,283.94
//          146.55    88            1,286.55
//          118.74    89            1,288.74
//          90.53     90            1,290.53
//          61.88     91            1,291.88
//          32.81     92            1,292.81
//          3.30      93            1,293.30
//          0.00      94            1,293.35

//1. This function displays the welcome message to the user explaining what the program does.
function displayWelcome(){
  console.log("This program will determine the time to pay off a credit card and the interest paid based on the current balance," +
  " the interest rate, and the monthly payments made.");
}
displayWelcome();

//2. calculateMinimumPayment
//This function calculates the minimum payment. It should take balance and interest rate as arguments and return the
//minimum payment.
//So the value you display for minimum payment is the value you get from this method. Do not use a literal hardcoded
//value when you display the minimum payment!
//The function "calculateMinimumPayment" should take the balance and the rate the minimum rate is calculated it.
//In our case it's the 2% shown in the example. So given a 1500 balance and a 2% minimum payment rate,
//you get the $30 minimum payment that is shown.

//Starting balance
//var startingBalance=1500;
//Interest rate %
//var interestRate=18;
//Minimum payment rate %
//var minimumPaymentRate=2;

processPaymentSchedule(1500, 18, 2);

function calculateMinimumPayment(balance, minimumPaymentRate){
  var minimumPayment=balance*(minimumPaymentRate/100);
  return minimumPayment;
}

//3. This should be a closure function that generates a new id for the customer. The function should remember the
//previous id and the new generated id should be the old one plus 1. Make the initial id 1.
//The Object Technique will allow you to obtain the Golden Bow, demonstrate your mastery of the technique
//by completing Part 4 & 5 below.
//The generateId should actually be changed to say that it generates the payment id for the schedule and should start at 1.
//So in the loop that generates payment schedule, you will use that to create the payment id's.

function generateID(lastPaymentID){
  paymentID=lastPaymentID+1;
  return paymentID;
}

//4. processPaymentSchedule
//This function displays the actual payment schedule. It should take the balance, monthly interest rate and minimum
//payment as arguments.
//Use the 1500, 18% and 2% literal values below. Each time you calculate a new payment line, create an object literal
//with properties for the Year, Balance, Payment Num, and InterestPaid. Pass this object literal to the displayPayment
//function.
function processPaymentSchedule(balance, interestRate, minimumPaymentRate){

  var paymentNum=0;
  var minimumPayment=calculateMinimumPayment(balance, minimumPaymentRate);
  paymentNum=generateID(paymentNum);

  var interestPaid=balance*((interestRate/100)/12);
  var newBalance=balance-minimumPayment+interestPaid;
  var paymentSchedule =
    [{Year: [],
     Balance: [newBalance],
     PaymentNum:[paymentNum],
     InterestPaid:[interestPaid]
   }];
displayPayment(paymentSchedule);
var lastIndex=0;
while(lastIndex<5){
var lastpaymentNum=paymentSchedule[lastIndex].PaymentNum.pop();
var newPaymentNum=generateID(lastpaymentNum);
var lastBalance=paymentSchedule[lastIndex].Balance.pop();
var newMinimumPayment=calculateMinimumPayment(lastBalance, minimumPaymentRate);
var newInterestPaid=lastBalance*((interestRate/100)/12);
var nextBalance=lastBalance-minimumPayment+newInterestPaid;
lastIndex++;
paymentSchedule.push({Year: [],
 Balance: [nextBalance],
 PaymentNum:[newPaymentNum],
 InterestPaid:[newInterestPaid]
});
 displayPayment(paymentSchedule[lastIndex]);
}
}

//5. displayPayment
//This function should take the payment object literal and display it on the console. See the output example in part 4.
//Save your program in a file named credit.js and save it in a folder called Assignment_3. Zip that folder and
//submit in the dropbox.
function displayPayment(paymentSchedule){
  console.log(paymentSchedule);
  //onsole.log(paymentSchedule.Balance);

}
