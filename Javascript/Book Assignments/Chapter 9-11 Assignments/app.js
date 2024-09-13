
//Chapter 9-11 Assignments
//User input & Conditional Statement


//Question 1
// making variable for take input from user
// var cityName = prompt("Enter your city name!");

// if(cityName === "Karachi"){
//     alert("Welcome to city of lights")
// };


//Question 2
//Making variable for take gender identity from user

// var gender = prompt("Could you please share your gender identity?");

// if(gender === "Male"){
//     alert("Good Morning Sir.")
// };
// if(gender === "female"){
//     alert("Good Morning Ma'am")
// };


//Question 3

// var signalColor = prompt("Enter the color of the traffic signal!");

// if(signalColor === "Red"){
//     alert("Must Stop");
// }else if(signalColor === "Yellow"){
//     alert("Ready to move");
// }else if(signalColor === "Green"){
//     alert("Move Now");
// };

//Question 4

// var remainingFuel = prompt("Enter the remaining fuel in your car (in liters):");

// if (remainingFuel <= "0.25"){
//     alert("Please refill the fuel in your car")
// };

//Question 5

// var a = 4;
// if(++a === 5){
//     alert("given condition for variable a is true"); //condition is true
// };

// var b = 82;
// if(b++ === 83){
//     alert("given condition for variable b is true"); //condition is false
// };

// var c =12;
// if(c++ === 13){
//     alert("Condition 1 is true"); //Condition is false
// }
// if( c === 13){
//     alert("Condition 2 is true"); //now c  is 13 condition is true
// };
// if(++c < 14){
//     alert("Condition 3 is true") //Condition is false c is not greater than 14
// };
// if(c === 14){
//     alert("Condition 4 is true"); //now value of c is 14 condition is true 
// };


// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;

// if (totalCost === materialCost + laborCost){
//     alert("The cost equals")
// }

// if(true){
//     alert("True");
// }
// if(false){
//     alert("False");
// }

// if("car" < "cat"){
//     alert("car is smaller than cat")
// };


//Question 6

// var obtainedMarks = prompt("Enter obtained marks in three subjects");
// var totalMarks = prompt("Enter total marks");


// var percentage = obtainedMarks/totalMarks*100;

// var remarksA1 = "Excellent";
// var remarksA = "Good";
// var remarksB = "You need to Improve";
// var remarksFail = "Sorry";

// document.write("<h1>Marks Sheet</h1><br>");
// document.write(`<br>Total Marks : ${totalMarks}<br>`);
// document.write(`Marks Obtained : ${obtainedMarks}<br>`);
// document.write(`Percentage : ${percentage}% <br>`);


// if(percentage >= 80){
//     document.write(`Grade : A-one<br>Remarks : ${remarksA1}`)
// }else if(percentage >= 70){
//     document.write(`Grade : A<br>Remarks : ${remarksA}`)
// }else if(percentage >= 60){
//     document.write(`Grade : B<br>Remarks : ${remarksB}`)
// };

// if(percentage < 60){
//     document.write(`Grade : Fail<br>Remarks : ${remarksFail}`)
// };


//Question # 7
// var secretNumber = 7;

// var userGuessNumber = prompt("Guess the secret number (between 1 and 10):");
// userGuessNumber = Number(userGuessNumber);

// if (userGuessNumber === secretNumber){
//     alert("Bingo! Correct answer");
// }else if(userGuessNumber + 1 === secretNumber){
//     alert("Close enough to the correct answer")
// }else{
//     alert("Sorry! that's not correct")
// };



//Question # 8

// var userNum = prompt("Enter your Number");
// userNum = Number(userNum);

// if (userNum % 3 === 0){
//     alert(`The number ${userNum} is divisible by 3`);
// }else{
//     alert(`The number ${userNum} is not divisible by 3`);
// }


//Question 9

// var userNum1 = prompt("Enter a number");
// userNum1 = Number(userNum1);

// if(userNum1 % 2 === 0){
//     alert(`The number ${userNum1} is even.`);
// }else{
//     alert(`The number ${userNum1} is odd.`);
// };


//Question 10

// var temprature = prompt("Enter Temprature");
// temprature = Number(temprature);

// if(temprature > 40){
//     alert("It is too hot outside");
// }else if(temprature > 30){
//     alert("The weather today is normal");
// }else if(temprature > 20){
//     alert("Today's weather is cool");
// }else if(temprature > 10){
//     alert("OMG! Today's weather is so cool");
// }



//Question 11

// var firstNum = Number(prompt("Enter First Number"));

// var operator = prompt("Select Operator(+, -, *, /, %)");

// var secondNum = Number(prompt("Enter Second Number"));

// var result;


// if(operator === "+"){
//     result = firstNum + secondNum;
// };

// if(operator === "-"){
//     result = firstNum - secondNum;
// };

// if(operator === "*"){
//     result = firstNum * secondNum;
// };

// if(operator === "/"){
//     result = firstNum / secondNum;
// }
// if(operator === "%"){
//     result = firstNum / secondNum * 100;
// }

// alert(`The result of ${firstNum} ${operator} ${secondNum} = ${result}`);