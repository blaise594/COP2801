//Daniel Rogers - #528292 - COP2801
//This program determines the length of time needed to pay off a credit card
//balance, as well as the total interest paid.

//1. This function displays the welcome message to the user explaining what the program does.
function displayWelcome(){
  console.log("This program will determine the time to pay off a credit card and the interest paid based on the current balance," +
  " the interest rate, and the monthly payments made.");
  console.log("Balance on your credit card: 1500");
  console.log("Interest Rate: 18");
  console.log("Assuming a minimum payment of 2% of the balance");
  console.log("Your minimum payment would be $"+ calculateMinimumPayment(1500, 2));
  console.log("PAYOFF SCHEDULE");
  console.log("_______________");
  console.log("Year"+"\t"+"Balance"+"\t"+"Payment Num"+"\t"+"Interest Paid")
  //Starting balance, Interest rate %, Minimum payment rate %
  processPaymentSchedule(1500, 18, 2);
}
displayWelcome();

//2. Calculates the minimum payment. Takes balance and interest rate as arguments and returns the
//minimum payment.
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
   displayPayment(paymentSchedule[0]);
   //Keeps track of total interest paid
   var totalInterest=interestPaid;
   var lastIndex=0;
   while(newBalance>0){
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
     //Keeps balance from going negative
     if(nextBalance<0){
       nextBalance=0;
     }

     newBalance=nextBalance;
     //Create an object literal with properties for the Year, Balance, Payment Num, and InterestPaid.
     paymentSchedule.push({
       Year: [year],
       Balance: [newBalance],
       PaymentNum:[newPaymentNum],
       InterestPaid:[totalInterest]
     });
     //Pass object literal to the displayPayment
     displayPayment(paymentSchedule[lastIndex]);
   }
}

//5. Takes the payment object literal and displays it on the console.
function displayPayment(paymentSchedule){
  //creates a new array with just the values
  var print=Object.values(paymentSchedule);
  console.log(print[0].toString()+"\t"+print[1].toString()+"\t"+print[2].toString()+"\t"+print[3].toString());
}
