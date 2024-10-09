// Chapter 21 - 25 Assignments


// Question # 1
// var firstName = prompt(`Enter First name`);
// var lastName = prompt(`Enter Last Name`);

// var fullName = firstName + " " + lastName;
// alert(`Hello ${fullName}`);


// Question # 2
// var favoritePhone = prompt(`Enter your favourite Mobile Phone model`);

// document.write(`My favorite phone is: ${favoritePhone} <br> Length of string: ${favoritePhone.length}`);


// Question # 3
// var nationality = "Pakistani";
// var index = nationality.indexOf("n");
// document.write(`String: ${nationality} <br> Index of "n": ${index}`)



// Question # 4
// var greet = "Hello World";
// var index = greet.lastIndexOf("l");
// document.write(`String: ${greet} <br> Last Index of "l": ${index}`);



// Question # 5
// var nationality = "Pakistani";
// var index = nationality.charAt(3);
// document.write(`String: ${nationality} <br> Character at index 3: ${index}`)


// Question # 6
// var firstName = prompt(`Enter First name`);
// var lastName = prompt(`Enter Last Name`);


// var fullName = firstName.concat(lastName);
// alert(`Hello ${fullName}`);


// Question # 7
// var city = "Hyderabad";
// var replace = city.replace("Hyder", "Islam");
// document.write(`City: ${city} <br> After replacement: ${replace}`)


// Question # 8
// var message = "Ali and Sami are best freinds. They play cricket and football together";
// var message1 =  message.replace(/and/g, "&");
// document.write(`Message: ${message} <br> After replacement: ${message1}`);


// Question # 9
// var value = "472";
// document.write(`Value: ${value} <br> Type: ${typeof(value)}<br>`);
// var convert = +value;
// document.write(`Value: ${value} <br> Type: ${typeof(convert)}`);


// Question # 10
// var userInput = prompt(`Enter your favorite Game:`);
// document.write(`User input: ${userInput} <br> Uppercase: ${userInput.toUpperCase()}`)


// Question # 11
// var userInput = prompt(`Enter your favorite Game:`);
// var titleCase = userInput.charAt(0).toUpperCase();
// var remaining =  userInput.slice(1);
// document.write(`User input: ${userInput} <br> Titlecase: ${titleCase + remaining}`);


// Question # 12
// var num = 35.36;
// var str = num.toString();
// var result = str.replace(".", "");

// document.write(`Number: ${num} <br> Result: ${result}`);



// Question # 13
// var userName = prompt(`Enter Your Name`);
// for (i = 0; i < userName.length; i++){
//     if (userName.charCodeAt(i) === 33 || userName.charCodeAt(i) === 44 || userName.charCodeAt(i) === 46 || userName.charCodeAt(i) === 64){
//         prompt("Please enter a valid user name");
//         break;
//     }
// }


// Question # 14

// var a = ["cake", "apple pie","cookie", "chips", "patties"];

// var userInput = prompt(`Welcome to my Bakery. what do you want to order`);
// userInput = userInput.toLowerCase();

// for(i = 0; i < a.length; i++){
//     if(userInput === a[i]){
//         alert(`${userInput} is available at index ${i} in our Bakery.`)
//         break;
//     }
// };
// if(userInput !== a[i]){
//     alert(`We are sorry ${userInput} is not available in our Bakery`)
// };


// Question # 15
// var userInput = prompt(`Enter your password`);
// if(userInput.length < 6){
//     document.write(`Entered Password: ${userInput} <br>Password length should be minimun 6 letters Please enter a valid password.`)
// }else if(!isNaN(userInput.charAt(0))){
//     document.write(`Entered Password: ${userInput} <br>Password cannot begin with a number Please enter a valid password.`)
// }else{
//     alert(`Correct Password!`)
// }




// Question # 16
// var university = "University of karachi";

// Convert the string to an array using the split method
// var universityArray = university.split('');

// Display the elements of the array in the browser
// document.write("Elements of the array:<br>");
// for (var i = 0; i < universityArray.length; i++) {
//     document.write(universityArray[i] + "<br>");
// }




// Question # 17
// var userInput = prompt("Enter your country name");
// document.write(`User Input: ${userInput} <br> Last character of input: ${userInput.charAt(userInput.length-1)}`);


// Question # 18
