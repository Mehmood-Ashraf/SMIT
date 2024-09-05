/* Chapter 5 */


// Question 1
var num1 = prompt("Add First number");
var num2 = prompt("Add Second number");

//Convert prompt string to a number
num1 = Number(num1);
num2 = Number(num2);

//Adding above both variable values
var total = num1 + num2;
document.write(`Sum of ${num1} and ${num2} is ${total}`);


// Question 2 (Subtraction)
var num1 = prompt("Add First number");
var num2 = prompt("Add Second number");

num1 = Number(num1);
num2 = Number(num2);
var total = num1 - num2;
document.write(`Subtraction of ${num1} and ${num2} is ${total}`);


// // Multiplication
var num1 = prompt("Add First number");
var num2 = prompt("Add Second number");
num1 = Number(num1);
num2 = Number(num2);

var total = num1 * num2;
document.write(`Multiplication of ${num1} and ${num2} is ${total}`);


// // Division
var num1 = prompt("Add First number");
var num2 = prompt("Add Second number");
num1 = Number(num1);
num2 = Number(num2);

var total = num1 / num2;
document.write(`Division of ${num1} and ${num2} is ${total}`);


// // Modulus
var num1 = prompt("Add First number");
var num2 = prompt("Add Second number");
num1 = Number(num1);
num2 = Number(num2);

var total = num1 % num2;
document.write(`The modulus of ${num1} and ${num2} is ${total}`);


// Question 3

//Declare a variable
var myNumber;
document.write(`Value after variable declaration is $${myNumber} <br>`);

//Initialize value to variable
myNumber = 5;
document.write(`Initial value: ${myNumber}<br>`);

// Increment in variable
++myNumber;
document.write(`Value after increment is: ${myNumber}<br>`);

//adding 7 after Increment
myNumber =  myNumber + 7;
document.write(`Value after Addition is: ${myNumber}<br>`);

//decrement after adding
--myNumber;
document.write(`Value after decrement is: ${myNumber}<br>`);

// Divide by 3 after decrement
var remainder = myNumber % 3;
document.write(`The remainder is ${remainder}`);


//Question 4

// Store the cost of one movie ticket
var ticketPrice = 600;

// Number of tickets
var numberOfTickets = 5;

// Calculate the total cost
var totalCost = ticketPrice * numberOfTickets;

// Display the total cost
document.write(`Total cost to buy ${numberOfTickets} tickets to a movie is ${totalCost}PKR`);


//Question 5
//Multiplication Table

var number = prompt("Enter a number to display its multiplication table:");
number = Number(number);


document.write(`<h1>Table of ${number}</h1>`);
document.write(`<p>${number} x 1 = ${number * 1}</p>`);
document.write(`<p>${number} x 2 = ${number * 2}</p>`);
document.write(`<p>${number} x 3 = ${number * 3}</p>`);
document.write(`<p>${number} x 4 = ${number * 4}</p>`);
document.write(`<p>${number} x 5 = ${number * 5}</p>`);
document.write(`<p>${number} x 6 = ${number * 6}</p>`);
document.write(`<p>${number} x 7 = ${number * 7}</p>`);
document.write(`<p>${number} x 8 = ${number * 8}</p>`);
document.write(`<p>${number} x 9 = ${number * 9}</p>`);
document.write(`<p>${number} x 10 = ${number * 10}</p>`);


//Question 6
//Temperature Converter

var celsiusTemperature = 25;
var farenheite = (celsiusTemperature * 9/5) + 32;

document.write(`${celsiusTemperature}<sup>o</sup>C is ${farenheite}<sup>o</sup>F<br>`);

var farenheite1 = 70;
var celsiusTemperature1 =(farenheite1 -32) * 5/9;

document.write(`${farenheite1}<sup>o</sup>F is ${celsiusTemperature1}<sup>o</sup>C`);


// Question 7
//Shopping Cart

document.write(`<h1>Shopping Cart</h1>`);

var item1price = 650;
var item2price = 100;

var quantityItem1 = 3;
var quantityItem2 = 7;

var shippingCarges = 100;


document.write(`<p>Price of item 1 is ${item1price}</p>`);
document.write(`<p>Quantity of item 1 is ${quantityItem1}</p>`);

document.write(`<p>Price of item 2 is ${item2price}</p>`);
document.write(`<p>Quantity of item 2 is ${quantityItem2}</p>`);

document.write(`<p>Shippping Charges ${shippingCarges}</p>`);

var totalCost = item1price * quantityItem1 + item2price * quantityItem2 + shippingCarges;

document.write(`<p>Total cost of your order is ${totalCost}</p>`);


// Question 8
//Marks Sheet

document.write(`<h1> Marks Sheet </h1>`);

var totalMarks = 980;
var obtainedMarks = 804;
var percentage = obtainedMarks/totalMarks * 100;

document.write(`<p>Total Marks: ${totalMarks}</p>`);
document.write(`<p>Obtained Marks: ${obtainedMarks}</p>`);
document.write(`<p>Percentage: ${percentage}%</p>`);


// Question 9
//Currency Converter

var dollars = 10;
var riyals = 25;

var dollarValue = 104.80;
var riyalValue = 28;

var totalPKR = dollars * dollarValue + riyals * riyalValue;
document.write(`Total Currency in PKR: ${totalPKR}`);



// Question 10

var number = 10;
console.log(number + 5 * 10 / 2);


// Question 11
//Age Calculator

document.write(`<h1> Age Calculator </h1>`)
var currentYear = 2024;
var birthYear = 1994;

var age = currentYear - birthYear;

document.write(`<p>Current Year: ${currentYear}</p>`)
document.write(`<p>Birt Year: ${birthYear}</p>`)
document.write(`<p>Your age is: ${age}</p>`)


// Question 12
// The Geometrizer

var radius = 20;
var pi = 3.142
var circumference = 2 * pi * radius;

var area = pi * radius * radius;

document.write(`<h1>The Geometrizer</h1>`)
document.write(`<p>Radius of a circle: ${radius}</p>`);
document.write(`<p>The circumference is: ${circumference}</p>`);
document.write(`<p>The area is: ${area}</p>`);


// Question 13
//The Lifetime Supply Calculator

var favoriteSnacks = "Chocolate Chip";
var currentAge = 30;
var maxAge = 70;
var dailySnacks = 3;

var yearsLeft = maxAge - currentAge;
var totalSnacks = dailySnacks * 365 * yearsLeft;

document.write(`<h1>The Lifetime Supply Calculator</h1>`)

document.write(`<p>Favourite SnacK: ${favoriteSnacks}</p>`);
document.write(`<p>Current age: ${currentAge}</p>`);
document.write(`<p>Estimated Maximum age: ${maxAge}</p>`);
document.write(`<p>Amount of snacks per day: ${dailySnacks}</p>`);
document.write(`<p>You will need ${totalSnacks} ${favoriteSnacks} to last you until the ripe old age of ${maxAge}</p>`);
