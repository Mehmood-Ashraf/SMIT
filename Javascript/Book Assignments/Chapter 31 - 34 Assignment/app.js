// Chapter # 31 - 34 Assignments

// Question # 1
// {
    // Display current date and time in browser
//     document.write(`${new Date()}`)
// }

// Question # 2
// {
    // Declare a variable for store current date and time
    // var date = new Date();
    // Store month names in an array because javascript not returns month value in words this method will return number of month like a index value from 0 to 11.
    // var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    // document.write(`Current Month: ${monthNames[date.getMonth()]}`)    // => date.getmonth() will return value 9.
// }


// Question # 3
// {
    // Create an array with the abbreviated names of the days of the week
    // const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    // Get the current day of the week as a number (0 for Sunday, 1 for Monday, etc.)
    // Display the alert with message of day.
//     alert(`Today is ${daysOfWeek[new Date().getDay()]}`);
// }


// Question # 4
// {
    // Get the current day as a number. getDay() method returns day value in number.. (0 is sunday, 1 is monday, 6 is saturday)
    // var day = new Date().getDay();

    // Check the day if the sunday is 0 or saturday is 6
    // if (day === 0 || day === 6) {
        // alert(`It's Funday`)
    // }else{
        // alert(`It's a regular day`)
    // }
// }


// Question # 5
// {
    // Get the current date.
    // var day = new Date().getDate();
    
    // Check the date is less than 15 or not
//     if (day < 16) {
//         alert(`First fifteen days of the month`)
//     }else{
//         alert(`Last days of the month`)
//     }
// }


// Question # 6
// {
//     var date = new Date();
//     var miliSec = date.getTime(); 
//     var mnts = date.getTime() / 1000 / 60;


//     document.write(`Current Date: ${date} <br> Elapsed millisconds since January 1, 1970: ${miliSec} <br> Elapsed minutes since January 1, 1970: ${mnts}`)
// }


// Question # 7
// {
//     var hours = new Date().getHours();

// if (hours >= 12 ) {
//     alert(`It's PM`)
// }else{
//     alert(`It's AM`)
// }
// }


// Question # 8
// {
//     var laterDate = new Date("December 31, 2024");
//     document.write(laterDate)
// }


// Question # 9
// {
    // var ramadanStarts = new Date("March 10, 2024");
    // var currentDate = new Date();
    
    // var ramadanTime = ramadanStarts.getTime();
    // var currentTime = currentDate.getTime();

    // var finalTime = currentTime - ramadanTime;
    // var passedDays = finalTime / (1000 * 60 * 60 * 24);
    
    // document.write(`${Math.floor(passedDays)} days have passed since 1st Ramadan, 2024`);


    // Also we can do in short form:
    // var ramadanStarts = new Date().getTime() - new Date("March 10, 2024").getTime();
    // var passedDays = Math.floor(ramadanStarts / (1000 * 60 * 60 *24));
    // document.write(`${passedDays} days have passed since 1st Ramadan, 2024`);
// }


// Question # 10
// {
//     var referenceDate = new Date();
//     var beginning2024 = new Date("January 1, 2024");

//     var diffTime = referenceDate - beginning2024;
//     var elapsedSec = Math.floor(diffTime / 1000);
//     document.write(`On reference date ${referenceDate} <br> ${elapsedSec} seconds had passed since beginning of 2024.`)
// }


// Question # 11
// {
//     var currentDate = new Date();
//     var hours = currentDate.getHours();
//     currentDate.setHours(hours - 1);
//     document.write(`Current date: ${new Date()} <br> 1 hour ago, it was ${currentDate}`)
// }


// Question # 12
// {
//     var currentDate = new Date();
//     currentDate.setFullYear(currentDate.getFullYear() - 100);
//     console.log(currentDate);
    
//     alert(`Current date : ${new Date()} 100 years back, it was ${currentDate}`);
    
// }



// Question # 13
// Declare a variable for store user age using prompt. 
// var userAge = +prompt('Enter your age');

// Storing current year in a varibale
// var year = new Date().getFullYear();

// Display user age and birth year in browser.
// document.write(`Your age is ${userAge} <br> Your birth year is ${year - userAge}`);


//Question # 14
// {

//     var customerName = "Mehmood";

    // var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    // var currentMonth = monthNames[new Date().getMonth()];
    // var numberOfUnits = 410;
    // var chargePerUnit = 35;
    // var netAmount = numberOfUnits * chargePerUnit;
    // var latePayment = 1000;
    // var grossAmount = netAmount + latePayment;

//     document.write(`Customer Name: ${customerName} <br> Month: ${currentMonth} <br> Numbers of unit: ${numberOfUnits} <br> Charges per unit: ${chargePerUnit} <br> Net Amount Payable (within Due Date): ${netAmount} <br> Late payment surcharge: ${latePayment} <br> Gross Amount Payable (after Due Date): ${grossAmount}`)
// }


// function bill(name, units) {
//     document.write(`Customer Name: ${name} <br> Month: ${monthNames[new Date().getMonth()]} <br> Numbers of Unit: ${units} <br> Charge per Unit ${chargePerUnit} <br> Net Amount Payable: ${units * chargePerUnit} <br> Late Payment: ${latePayment} <br> Gross Amount: ${units * chargePerUnit + latePayment}`)
// }

// bill("Mehmood", 410);
