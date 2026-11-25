const num1 = 10;
const num2 = 45

const sum = num1 + num2

console.log(sum)



// Calculate subtraction of two numbers. 

const Subtraction = num2-num1;
console.log(Subtraction)

// Calculate multiplication of two numbers. 


const multiply = num1*num2
console.log(multiply)


// Calculate division of two numbers.


const division = num2/num1;
console.log(division) 

// Find the remainder when one number is divided by another.


const remainder = num2%num1


console.log(remainder)

// Calculate the square of a number using exponentiation. 


const exponentiation = num1**2
console.log(exponentiation)


// Calculate the cube of a number. 


const cube = num2**3

console.log(cube)

// Demonstrate the difference between ++a and a++. 
let num = 5
let prefix = ++num;
let postfix = num++

console.log(prefix)
console.log(postfix)


// Demonstrate the difference between --a and a--. 

let x = --num
let y = num--

console.log(x)
console.log(y)


//  Use compound assignment operators to update a variable.


let points = 20;
points += 10;  // points is now 30
points -= 5;   // points is now 25
points *= 2;   // points is now 50





// Compare two numbers using greater-than and less-than operators. 


if(num1>0 ||num2<num1){
    console.log("hello")
}



//  Check whether two values are equal using ==.



let text1 = "100"
let text2 = 100

if(text1==text2){
    console.log("Matched")
}


//  Check whether two values are strictly equal using ===.

let text3 = "hello";
let text4 = "hello"

if(text3 === text4){
console.log("Strict Matched")
}