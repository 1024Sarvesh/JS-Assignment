//  Display the month name based on a number from 1 to 12. 

let month = 5;

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("Invalid Month Number");
}

// Check whether a character is a vowel or consonant. 

let ch = "a";

if (ch.length !== 1 || !/[a-z]/i.test(ch)) {
    console.log("Enter a valid alphabet");
} else if ("aeiou".includes(ch.toLowerCase())) {
    console.log("Vowel");
} else {
    console.log("Consonant");
}

// Check whether a character is uppercase, lowercase, digit or special character. 

let ch1 = "A";

if (ch >= "A" && ch <= "Z") {
    console.log("Uppercase Letter");
} else if (ch >= "a" && ch <= "z") {
    console.log("Lowercase Letter");
} else if (ch >= "0" && ch <= "9") {
    console.log("Digit");
} else {
    console.log("Special Character");
}

//  Calculate shipping charges based on order amount. 


let amount = 750;
let shipping;

if (amount >= 1000) {
    shipping = 0;
} else if (amount >= 500) {
    shipping = 50;
} else {
    shipping = 100;
}

console.log(shipping);
console.log(amount + shipping);


// Create an admission eligibility checker using age and minimum percentage.


let age = 19;
let percentage = 75;

if (age >= 18 && percentage >= 60) {
    console.log("Eligible for Admission");
} else {
    console.log("Not Eligible for Admission");
}



// Create an ATM withdrawal validation program that checks balance, withdrawal amount 
// and minimum balance.

let balance = 10000;
let withdrawal = 3000;
let minimumBalance = 500;

if (withdrawal <= 0) {
    console.log("Invalid Withdrawal Amount");
} else if (withdrawal > balance) {
    console.log("Insufficient Balance");
} else if (balance - withdrawal < minimumBalance) {
    console.log("Minimum Balance of ₹500 Must Be Maintained");
} else {
    balance = balance - withdrawal;

    console.log("Withdrawal Successful");
    console.log(balance);
}