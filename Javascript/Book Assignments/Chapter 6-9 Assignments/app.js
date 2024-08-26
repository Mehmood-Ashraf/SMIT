
// // //Chapter 6-9 Assignment
// // //Math Expressions


// document.write("<b>Result</b> <br>");

// var a = 10;
// document.write(`<br>The value of a is: ${a}<br>`);

// document.write(`<br>The value of ++a is: ${++a}<br>`);
// document.write(`Now the value of a is: ${a}<br>`);

// document.write(`<br>The value of a++ is: ${a++}<br>`);
// document.write(`Now the value of a is: ${a}<br>`);

// document.write(`<br>The value of --a is: ${--a}<br>`);
// document.write(`Now the value of a is: ${a}<br>`);

// document.write(`<br>The value of a-- is: ${a--}<br>`);
// document.write(`Now the value of a is: ${a}<br><br><br>`);




// var a = 4, b = 2;
// document.write(`a is ${a}<br>`);
// document.write(`b is ${b}<br>`);

// // --a; a is now 3
// // --a - --b result is 2;
// //--a - --b + ++b resut is 4;
// //--a - --b + ++b + b-- result is 6

// var result = --a - --b + ++b + b--;

// document.write(`result is ${result}<br>`);



// var userName = prompt(`Enter your Name`);
// var greet = `Hello ${userName} Welcome to our page!`;
// alert(greet);


var subject1 = prompt("Enter your first subject name");
var subject2 = prompt("Enter your second  subject name");
var subject3 = prompt("Enter your third  subject name");

var totalMarks = 100;

var obtainedMarks1 = prompt("Enter your first subject obtained marks");
var obtainedMarks2 = prompt("Enter your second subject obtained marks");
var obtainedMarks3 = prompt("Enter your third subject obtained marks");

var percentage1 = obtainedMarks1/totalMarks*100;
var percentage2 = obtainedMarks2/totalMarks*100;
var percentage3 = obtainedMarks3/totalMarks*100;

// document.write(`<b>Subject &nbsp Total Mraks &nbsp Obtained Mraks &nbsp Percentage</b><br>`);

document.write("<pre><b>Subject    Total Mraks    Obtained Mraks    Percentage</b></pre>");

// document.write(<pre>"subject1" + "totalMarks" + "obtainedMarks1" + "percentage1" </pre>);

document.write(`${subject1} &nbsp &nbsp &nbsp &nbsp${totalMarks} &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp ${obtainedMarks1} &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp ${percentage1}% <br>`);


document.write(`${subject2} &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp ${totalMarks} &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp ${obtainedMarks2} &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp&nbsp ${percentage2}% <br>`);


document.write(`${subject3} &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp${totalMarks} &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp ${obtainedMarks3} &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp ${percentage3}% <br>`);

var totalMarks1 = totalMarks + totalMarks + totalMarks;

