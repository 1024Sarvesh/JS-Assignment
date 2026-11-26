// Check whether a number is positive.

let num = 4;
if (num >= 0) {
    console.log("Number is Positive")
}

// Check whether a number is negative. 

if (num < 0) {
    console.log("Number is Negative")
}

// Check whether a number is zero. 

if (num = 0) {
    console.log('Number is zero')
}

// Check whether a number is even or odd. 

if (num % 2 === 0) {
    console.log("Number is Even")
} else {
    console.log("Number is Odd")

}

// Check whether a person is eligible to vote. 


let PersonAge = 18;

if (PersonAge >= 18) {
    console.log("Eligble for Vote")
}

// Check whether a student has passed or failed (passing marks: 33). 

let marks = 48;

if (marks >= 33) {
    console.log("Student is Passed")
} else {
    console.log("Student is Failed")

}

// Calculate grades based on student percentage. 

let percentage = 89;

if (percentage >= 90) {
    console.log("Grade is A+")
} else if (percentage >= 75) {
    console.log("Grade is A")
} else if (percentage >= 60) {
    console.log("Grade is B")
} else if (percentage >= 40) {
    console.log("Grade is C")
} else {
    console.log("Grade is F")
}


// Find the greater of two numbers. 

x = 4;
y = 5;

if (x > y) {
    console.log(x + " is greater than " + y)
} else if (x < y) {
    console.log(y + " is greater than " + x)
} else {
    console.log(y + " is equal to " + x)

}

// Find the greatest among three numbers. 

z = 6;

if (x > y && x > z) {
    console.log(x + " is greater than " + y + " and " + z)
}else if(y>x && y>z){
    console.log(y + " is greater than " + x + " and " + z)

}else if(z>x && z>y){
    console.log(z + " is greater than " + x + " and " + y)
}else{
    console.log(x + " is equal to" + y + " and " + z)
}

//  Find the smallest among three numbers. 

if (x < y && x < z) {
    console.log(x + " is smaller than " + y + " and " + z)
}else if(y<x && y<z){
    console.log(y + " is smaller than " + x + " and " + z)

}else if(z<x && z<y){
    console.log(z + " is smaller than " + x + " and " + y)
}else{
    console.log(x + " is equal to" + y + " and " + z)
}

// Check whether a year is a leap year. 

let year = 2024;

if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
    console.log("Leap Year");
} else {
    console.log("Not a Leap Year");
}

//  Check whether a number is divisible by both 5 and 11.

let num1 = 55;

if (num % 5 === 0 && num % 11 === 0) {
    console.log("Divisible by both 5 and 11");
} else {
    console.log("Not divisible by both 5 and 11");
}


// Check whether a number is divisible by 3 or 7.

let num2 = 21;

if (num % 3 === 0 || num % 7 === 0) {
    console.log("Divisible by 3 or 7");
} else {
    console.log("Not divisible by 3 or 7");
}

//  Create a simple login validation program using a predefined username and password.

let username = "admin";
let password = "12345";

if (username === "admin" && password === "12345") {
    console.log("Login Successful");
} else {
    console.log("Invalid Username or Password");}

    // Create an electricity bill calculator using slab-based pricing. 

    let units = 250;
let bill;

if (units <= 100) {
    bill = units * 5;
} else if (units <= 200) {
    bill = (100 * 5) + (units - 100) * 7;
} else {
    bill = (100 * 5) + (100 * 7) + (units - 200) * 10;
}

console.log("Electricity Bill = ₹" + bill);


//  Calculate employee bonuses based on years of experience.

let salary = 30000;
let experience = 6;
let bonus;

if (experience >= 10) {
    bonus = salary * 0.20;
} else if (experience >= 5) {
    bonus = salary * 0.10;
} else {
    bonus = salary * 0.05;
}

console.log("Employee Bonus = ₹" + bonus);


// Create a traffic signal program using switch. 

let signal = "red";

switch (signal) {
    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Get Ready");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid Signal");
}


// Create a calculator using switch. 


let num3 = 20;
let num4 = 10;
let operator = "+";

switch (operator) {
    case "+":
        console.log("Result = " + (num1 + num2));
        break;

    case "-":
        console.log("Result = " + (num1 - num2));
        break;

    case "*":
        console.log("Result = " + (num1 * num2));
        break;

    case "/":
        if (num2 !== 0) {
            console.log("Result = " + (num1 / num2));
        } else {
            console.log("Cannot divide by zero");
        }
        break;

    default:
        console.log("Invalid Operator");
}

//  Display the day of the week based on a number from 1 to 7. 

let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid Day Number");
}


