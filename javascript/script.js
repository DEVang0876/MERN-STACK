document.writeln("<br><br>Hello, World! , From External JS File");

var x = 10;
var y = 20;
var z = x + y;
document.writeln("<br>Sum of x and y is: " + z);    

// This is a comment in JavaScript

if (z > 20) {
    document.writeln("<br>Sum is greater than 20");
}
else {
    document.writeln("<br><h1><i>Sum is not greater than 20<i></h1>");
}


// Function to greet a user
function greet(name) {
    document.writeln("<br>Hello, " + name + "!");
}

greet("Tony Stark");


// Var --> Global Scope
// Let --> Block Scope
// Const --> Block Scope, Immutable 

for (let i = 0; i < 5; i++) {
    document.writeln("<br>Current value of i is: " + i);
}

//table loops
document.writeln("<br><table border='1'>"); 
for (let i = 1; i <= 5; i++) {
    if(i%2 == 0) 
    {
        document.writeln("<tr><td>Even: " + i + "</td>");
        document.writeln("<td>Even: " + i + "</td></tr>");
        
    } 
    else 
    {
        document.writeln("<tr><td>Odd: " + i + "</td>");
        document.writeln("<td>Odd: " + i + "</td></tr>");
    }
}
document.writeln("</table>");


//backticks
var a=100
document.writeln(`value of var a is ${a}`);





//for loop
for (let i = 0; i < 5; i++) {
    document.writeln("<br><br><br>Current value of i is: " + i);
}

//for in loop
let person = {name: "John", age: 30, city: "New York"};
document.writeln("<br><br><br>Using for-in loop:");
for (let key in person) {
    document.writeln("<br>" + key + ": " + person[key]);
}

//for of loop
let fruits = ["Apple", "Banana", "Cherry"];
document.writeln("<br><br><br>Using for-of loop:");
for (let fruit of fruits) {
    document.writeln("<br>" + fruit);
}

// while loop
let count = 0;
document.writeln("<br><br><br>Using while loop:");
while (count < 5) {
    document.writeln("<br>Count is: " + count);
    count++;
}

//for each loop
document.writeln("<br><br><br>Using ForEach loop:");
fruits.forEach(function(fruit) {
    document.writeln("<br>Fruit: " + fruit);
});



//functions

function add(a, b) {
    return a + b;
}

document.writeln("<br><br><br>Sum of 5 and 10 is: " + add(5, 10));

function subtract() {
    document.writeln("<br>Subtract function called");
}

subtract();

function multiply(a, b) {
    document.writeln("<br>Multiplication of " + a + " and " + b + " is: " + (a * b));
}

multiply(5, 10);

function divide() {
    return "Division function called";
}
var x= divide();
document.writeln("<br>"+x);

const operations = ()=> "Operations function called";
var y= operations();
document.writeln("<br>" + y);


const calculate = (a, b) => {
    document.write("<br>Calculate function called"+ (a+b));
}
calculate(10, 20);


const fun=(obj) => {return obj}
document.writeln("<br>fun. "+ fun("OBJECT"))

