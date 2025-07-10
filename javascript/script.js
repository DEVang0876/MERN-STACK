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

function greet(name) {
    document.writeln("<br>Hello, " + name + "!");
}

greet("Tony Stark");


// Var --> Global Scope
// Let --> Block Scope
// Const --> Block Scope, Immutable 

