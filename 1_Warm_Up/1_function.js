// Function declaration
// ----------------------------------
console.log("Print Hello World function");
function printHelloWorld(){
    console.log("Hello World");
}
printHelloWorld();
// ----------------------------------
console.log("Greet function")
function greet(name){
    console.log("Namaste, "+name);
}
greet("Vignesh");
greet("Vigneshwaran");
// ----------------------------------
console.log("Add function");
function add(a,b){
    console.log(a+b);
}
add(2,3);
// ----------------------------------
console.log("Multiply function");
function multiply(a,b){
    console.log(a*b);
}
multiply(2,3);
// ----------------------------------
console.log("Square function");
function square(x){
    let result = x * x;
    return result;
}
let value = square(2);
console.log(value);