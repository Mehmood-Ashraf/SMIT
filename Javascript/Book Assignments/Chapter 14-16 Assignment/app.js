// Chapter 14-16 Assignment
//Arrays


// Question # 1
//Empty Array
var studentNames = [];

// Question # 3
//String Array
var fruitNames = ["Mango", "Banana", "Strawberry", "Apple"];

// Question # 4
// Numbers Array
var numbers = [1, 2, 3, 4, 5];

// Question # 5
//Boolean Array
var isStudetns = [true, false];


// Question # 6
// Mixed Array
var mixedArray = ["Mehmood", 4, 5, true, false];


// Question # 7
document.write(`<h3>Qualifications</h3>`);

document.write(`<ol>`)

var eduQualification = ["HSC","SSC", "BCS", "BS", "B.COM", "MS", "M.Phil", "PhD"];
for(i=0; i<eduQualification.length; i++){
    document.write("<li>" +eduQualification[i] + "</li>")
}

document.write("</ol>")


// Question # 8
studentNames = ["Michael", "John", "Tony"];

var score = [320, 230, 480];

var totalMarks = 500;

var percentage = score[0] / totalMarks * 100;
var percentage1 = score[1] / totalMarks * 100;
var percentage2 = score[2] / totalMarks * 100;



document.write(`<p>Score of ${studentNames[0]} is ${score[0]}. percentage: ${percentage}%</p>`);
document.write(`<p>Score of ${studentNames[1]} is ${score[1]}. percentage: ${percentage1}%</p>`);
document.write(`<p>Score of ${studentNames[2]} is ${score[2]}. percentage: ${percentage2}%</p>`);


// Question # 9
var colorNames = ["white", "black", "red"];
document.write(`<b>Color Names</b></br>`)

document.write(`${colorNames} <br>`);

var userInput = prompt(`Which color you want to add at th beginning:`);

colorNames.unshift(userInput);
document.write(`<b>Added color at beginning </b>`)
document.write(`${colorNames } <br>`);

var userInput1 = prompt(`Which color you want to add in the last:`);
colorNames.push(userInput1);
document.write(`<b>Added color at end of the array </b>`)
document.write(`${colorNames} <br>`);

document.write(`<b>Added two more colors at beginning </b>`)
colorNames.unshift("pink", "yellow");
document.write(`${colorNames} <br>`);

document.write(`<b>Deleted First color from Array </b>`)
colorNames.shift();
document.write(`${colorNames}<br>`);

document.write(`<b>Deleted Last color from Array </b>`)
colorNames.pop();
document.write(`${colorNames} <br>`);

var userInput2 = prompt(`Which index number you want to add a colors name`);
userInput2 = Number(userInput2)
var userInput3 = prompt(`which color names you want to add`)

colorNames.splice(userInput2, 0, userInput3)
document.write(`${colorNames}<br>`);


var userInput4 = prompt(`Which index number you want to delete a color name`);
userInput4 = Number(userInput4);

var userInput5 = prompt(`How many colors you want to delete`);
userInput5 = Number(userInput5);

colorNames.splice(userInput4, userInput5);
document.write(colorNames);


// Question # 10
var studentScore = [320, 230, 480, 120];

document.write(`<b>Scores of Students</b> ${studentScore}<br>`)

studentScore.sort();

document.write(`<b>Ordered Scores of Students</b> ${studentScore}`)


// Question # 11
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
document.write(`<b>Cities List</b> <br> ${cities}<br>`);

var selectedCities = cities.slice(2, 4);
document.write(`<b>Selected Cities List</b> <br> ${selectedCities}`);


// Question # 12
var arr = ['This', "is", "my", "Cat"];
document.write(`<b>Array:<b> <br> ${arr}<br>`);

var string = arr.join(" ");
document.write(`<b>String:<b><br> ${string}`);


// Question # 13
var devices = ["keyboard", "Mouse", "Printer", "Monitor"];
document.write(`<b>Devices:</b><br> ${devices}<br>`);

var out1 = devices.shift();
document.write(`<b>Out:</b><br> ${out1}<br>`);

var out2 = devices.shift();
document.write(`<b>Out:</b><br> ${out2}<br>`);

var out3 = devices.shift();
document.write(`<b>Out:</b><br> ${out3}<br>`);

var out4 = devices.shift();
document.write(`<b>Out:</b><br> ${out4}`);


// Question # 14

var devices = ["keyboard", "Mouse", "Printer", "Monitor"];
document.write(`<b>Devices:</b><br> ${devices}<br>`);

var out1 = devices.pop();
document.write(`<b>Out:</b><br> ${out1}<br>`);

var out2 = devices.pop();
document.write(`<b>Out:</b><br> ${out2}<br>`);

var out3 = devices.pop();
document.write(`<b>Out:</b><br> ${out3}<br>`);

var out4 = devices.pop();
document.write(`<b>Out:</b><br> ${out4}`);



// Question # 15
var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Sony", "Nokia", "Haier"]
document.write(`<label for="phones">Choose a phone Manufacturer</label><br>`);
document.write(`<select id = "phones">`)
for (i = 0; i < phoneManufacturers.length; i++) {
    document.write('<option value="' + phoneManufacturers[i] + '">' + phoneManufacturers[i] + '</option>');
}
document.write('<option value="' + phoneManufacturers + '">' + phoneManufacturers + '</option>');
document.write(`</select>`);