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


//Starting balance, Interest rate %, Minimum payment rate %
processPaymentSchedule(1500, 18, 2);

function calculateMinimumPayment(balance, minimumPaymentRate){
  var minimumPayment=balance*(minimumPaymentRate/100);
  return minimumPayment;
}

//3. Generates the payment id for the schedule and should start at 1.
//So in the loop that generates payment schedule, you will use that to create the payment id's.

function generateID(lastPaymentID){
  paymentID=lastPaymentID+1;
  return paymentID;
}

//4. Displays the actual payment schedule. Takes the balance, monthly interest rate and minimum
//payment as arguments.
//Use the 1500, 18% and 2% literal values below. Each time you calculate a new payment line,
//function.
function processPaymentSchedule(balance, interestRate, minimumPaymentRate){

  var paymentNum=0;
  var minimumPayment=calculateMinimumPayment(balance, minimumPaymentRate);
  paymentNum=generateID(paymentNum);
  var year=1;
  var interestPaid=balance*((interestRate/100)/12);
  var newBalance=balance-minimumPayment+interestPaid;
  //Create an object literal with properties for the Year, Balance, Payment Num, and InterestPaid.
  var paymentSchedule =
    [{Year: [year],
     Balance: [newBalance],
     PaymentNum:[paymentNum],
     InterestPaid:[interestPaid]
   }];
   //Pass object literal to the displayPayment
   displayPayment(paymentSchedule);
   //Keeps track of total interest paid
   var totalInterest=interestPaid;
   var lastIndex=0;
   while(lastIndex<92){
     var lastpaymentNum=paymentSchedule[lastIndex].PaymentNum.pop();
     var newPaymentNum=generateID(lastpaymentNum);
     var lastBalance=paymentSchedule[lastIndex].Balance.pop();
     var newMinimumPayment=calculateMinimumPayment(lastBalance, minimumPaymentRate);
     var newInterestPaid=lastBalance*((interestRate/100)/12);
     var nextBalance=lastBalance-minimumPayment+newInterestPaid;
     //Calculates year
     if(newPaymentNum<=12){
       var year=1;
     }
     if(newPaymentNum>12){
       var year=Math.floor(newPaymentNum/12)+1;
     }
     //Adds to total interest paid
     totalInterest+=newInterestPaid;
     lastIndex++;
     //Create an object literal with properties for the Year, Balance, Payment Num, and InterestPaid.
     paymentSchedule.push({Year: [year],
       Balance: [nextBalance],
       PaymentNum:[newPaymentNum],
       InterestPaid:[totalInterest]
     });
     //Pass object literal to the displayPayment
     displayPayment(paymentSchedule[lastIndex]);
   }
}

//5. displayPayment
//This function should take the payment object literal and display it on the console. See the output example in part 4.
//Save your program in a file named credit.js and save it in a folder called Assignment_3. Zip that folder and
//submit in the dropbox.
function displayPayment(paymentSchedule){
  console.log(paymentSchedule);
  

}
