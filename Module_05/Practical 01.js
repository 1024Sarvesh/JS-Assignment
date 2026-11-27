// Print numbers from 1 to 10. 

for (let i = 1; i <= 10; i++) {
    console.log(i)
}

// Print numbers from 10 to 1. 

for (let i = 10; i >= 1; i--) {
    console.log(i)
}

// Print all even numbers from 1 to 100.

let i = 1;
while (i <= 100) {
    if (i % 2 === 0) {
        console.log(i)
    }
    i++;
}

// Print all odd numbers from 1 to 100. 

let j = 1;
while (j <= 100) {
    if (j % 2 !== 0) {
        console.log(j)
    }
    j++;
}


// Print the multiplication table of a given number. 

let number = 10;

let table = 1

while (table <= 10) {
    console.log(table * number)
    table++
}

// Calculate the sum of numbers from 1 to N. 

let n = 4
let sum = 0;
for (let i = 1; i <= n; i++) {
    sum += i;
}
console.log(sum)



//   Calculate the sum of all even numbers from 1 to N.

let n1 = 4
let sum1 = 0;
for (let i = 1; i <= n1; i++) {
    if (i % 2 === 0) {
        sum1 += i;
    }
}
console.log(sum1)

// Calculate the sum of all odd numbers from 1 to N. 

let n2 = 4
let sum2 = 0;
for (let i = 1; i <= n2; i++) {
    if (i % 2 !== 0) {
        sum2 += i;
    }
}
console.log(sum2)

// Calculate the factorial of a number. 


let num = 5;
let factorial = 1;

for(let i = 1;i<=num;i++){
    factorial = factorial * i

}
console.log(factorial)



// . Count the number of digits in an integer. 

let nums = 12345;
let count = 0;

while (nums !== 0) {
    nums = Math.floor(nums / 10);
    count++;
}

console.log("Number of digits:", count);

//  Reverse the digits of a number. 

let reverse = 0;
let nums1 = 12345
while (nums1 > 0) {
    let digit = nums1 % 10;
    reverse = reverse * 10 + digit;
    nums1 = Math.floor(nums1 / 10);
}
console.log("Reverse:", reverse);

//  Calculate the sum of digits of a number. 


let num2 = 12345;
let sum3 = 0;

while (num2 > 0) {
    let digit = num2 % 10;
    sum3 += digit;
    num2 = Math.floor(num2 / 10);
}

console.log("Sum of digits:", sum3);


//  Find the product of digits of a number. 

let productnum = 1234;
let product = 1;

while (productnum > 0) {
    let digit = productnum % 10;
    product *= digit;
    productnum = Math.floor(productnum / 10);
}

console.log("Product of digits:", product);


// Check whether a number is a palindrome. 


let palinum = 121;
let original = palinum;
let reverse1 = 0;

while (palinum > 0) {
    let digit = palinum % 10;
    reverse1 = reverse1 * 10 + digit;
    palinum = Math.floor(palinum / 10);
}

if (original === reverse1) {
    console.log("Palindrome number");
} else {
    console.log("Not a palindrome number");
}

// Check whether a number is an Armstrong number. 


let armnum = 153;
let armoriginal = armnum;
let armsum = 0;
let digits = armnum.toString().length;

while (armnum > 0) {
    let digit = armnum % 10;
    armsum += digit ** digits;
    armnum = Math.floor(armnum / 10);
}

if (armsum === armoriginal) {
    console.log("Armstrong number");
} else {
    console.log("Not an Armstrong number");
}

// Check whether a number is prime. 
let primenum = 7;
let isPrime = true;

if (primenum <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i <= Math.sqrt(primenum); i++) {
        if (primenum % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    console.log("Prime number");
} else {
    console.log("Not a prime number");
}