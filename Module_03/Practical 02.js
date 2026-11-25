// Demonstrate the difference between != and !==.


const text = "hello";
const text1 = 987;

if(text != text1){
    console.log("Unmatched")
}

if(text !== text1){
    console.log("Strict Unmatched")
}


// Check whether a student has passed using logical AND. 

const num = 99

if(num>90 && num<100){
    console.log("that Student Passed")
}


// Check whether a person is eligible based on age OR a special permission condition. 

const age =19;

if(age>=18){
    console.log("eligble")
}

// Check whether a person is NOT eligible using the NOT operator. 

if(!age>=18){
    console.log("Not Eligble")
}else{
    console.log("true")
}


//  Calculate the average of five subjects using arithmetic operators. 

const Hindi = 95;
const English = 85;
const Science = 98;
const Art = 80;
const SocialScience = 98

const avg = (Hindi + English + Science + Art + SocialScience)/5

console.log(avg)


// Calculate the percentage of a student. 
const total = 100
const student = (Hindi + English + Science + Art + SocialScience)/500
console.log(student)

let per =student*total

console.log(per)


// Calculate the area and perimeter of a rectangle. 

const length = 12;
const width = 14;

const area = length * width;
const perimeter = 2*(length + width)

console.log(area)
console.log(perimeter)


// Calculate the area and circumference of a circle. 

const radius = 10;

let circleArea = Math.PI*(radius**2);

let circumference = 2*Math.PI*radius;

console.log(circleArea)
console.log(circumference)


//  Use the ternary operator to determine whether a number is even or odd. 


const Number = 7;

const result = (Number%2===0)?"number is even":"number is odd"

console.log(result)

//  Use the ternary operator to determine whether a person is eligible to vote.


const Vote = (age>=18)?"eligble to vote":"not eligble to vote"
console.log(Vote)

//  Demonstrate operator precedence with a mathematical expression and explain its result. 




const result1 = 10 + 7 * 3 ** 9 - 49 / 7;
console.log(result1); 


//  Use the nullish coalescing operator to assign a default username when the provided 
// value is null or undefined.


const providedUsername = null; 
const username = providedUsername ?? "Guest";

console.log(username); 




// ========module Challange---------------------



function calculate(num1, num2) {
  const addition = num1 + num2;
  const subtraction = num1 - num2;
  const multiplication = num1 * num2;
  const division = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";

  console.log(`Numbers: ${num1} and ${num2}`);
  console.log(`Addition (+): ${addition}`);
  console.log(`Subtraction (-): ${subtraction}`);
  console.log(`Multiplication (*): ${multiplication}`);
  console.log(`Division (/): ${division}`);
}

calculate(20, 5);
