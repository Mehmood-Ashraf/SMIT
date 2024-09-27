// Chapter # 17-20 Assignments

//Question # 1
// var array = [
//     [],
//     [],
//     []
// ]

// Question # 2
// array = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
// ];

// array[1][2] = 5

// console.log(array);


// Question # 3
// for(i=1; i<=10; i++){
//     console.log(i);
// }

// Question # 4
// var userInput1 = prompt(`Enter a number to show its multiplication table`);

// var userInput2 = prompt(`Enter length multiplication table`);
// userInput2 = Number(userInput2);

// for (i = 1; i<=userInput2; i++){
    // console.log(`${userInput1} * ${i} = ${userInput1 * i}`);
// };


// Question # 5
// var fruits = ["Apple", "Banana", "Mango", "Orange", "strawberry"];


// for(i=0; i<fruits.length; i++){
//     console.log(fruits[i]);
// }

// for(i=0; i<fruits.length; i++){
//     console.log("Element at index " + i + " is " + fruits[i]);
// };

// Question # 6

// document.write(`<h3>Counting:</h3>`)
// for(i=1; i<=15; i++){
//     document.write(i + ",")
// }

// document.write(`<h3>Reverse Counting:</h3>`)
// for(i=10; i>=1; i--){
//     document.write(i + ",");
// }


// document.write(`<h3>Even:</h3>`);
// for (i=0; i<=20; i+=2){
//     document.write(i + ",");
// }

// document.write(`<h3>Odd:</h3>`);
// for (i=1; i<=20; i+=2){
//     document.write(i + ",");
// }

// document.write(`<h3>Series:</h3>`);
// for (i=2; i<=20; i+=2){
//     document.write(i + "k ,");
// }


// Question # 7
// var userInput = prompt(`welcome to my Bakery, what do you want to order?`);

// var a = ["cake", "apple pie", "cookie", "chips", "patties"]



// for(i = 0; i <= a.length; i++){
//     if(userInput === a[i]){
//         document.write(`${userInput} is available at index ${[i]} in our bakery`)
//         break;
//     }
// }
// if(userInput != a[i]){
// };


// Question # 8
// var numbers = [24, 53, 78, 91, 12];
// var largest = numbers[0];

// for (var i = 1; i < numbers.length; i++) {
//     if (numbers[i] > largest) {
//         largest = numbers[i];
//     }
// }

// console.log("The largest number is: " + largest);




// Question # 9
// var numbers = [24, 53, 78, 91, 12];
// var smallest = numbers[0];

// for (var i = 1; i < numbers.length; i++) {
//     if (numbers[i] < smallest) {
//         smallest = numbers[i];
//     }
// }

// console.log("The smallest number is: " + smallest);



// Question # 10
// for (i=5; i<=100; i+=5){
//     document.write(i + ",")
// }