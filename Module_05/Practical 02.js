// Print all prime numbers between 1 and 100

for (let num = 2; num <= 100; num++) {
    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(num);
    }
}


// Generate the Fibonacci series up to N terms. 

let n = 10;
let a = 0;
let b = 1;

for (let i = 1; i <= n; i++) {
    console.log(a);

    let next = a + b;
    a = b;
    b = next;
}

// Find the greatest common divisor (GCD) of two numbers. 

let a1 = 12;
let b1 = 18;

while (b1 !== 0) {
    let temp = b1;
    b1 = a1 % b1;
    a1 = temp;
}

console.log("GCD:", a1);

//  Find the least common multiple (LCM) of two numbers. 

let lcm1 = 10;
let lcm2 = 15;

let x = lcm1;
let y = lcm2;

while (y !== 0) {
    let temp = y;
    y = x % y;
    x = temp;
}

let gcd = x;
let lcm = Math.abs(a * b) / gcd;

console.log("LCM:", lcm);



// Print a right-angle triangle using stars. 

let triangle = 5;

for (let i = 1; i <= triangle; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {
        row += "* ";
    }

    console.log(row);
}

// Print an inverted star triangle. 


for (let i = triangle; i >= 1; i--) {
    let row = "";

    for (let j = 1; j <= i; j++) {
        row += "* ";
    }

    console.log(row);
}

// Print a pyramid pattern using stars


for (let i = 1; i <= triangle; i++) {
    let row = ''
    for (let j = 1; j <= triangle - i; j++) {
        row += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
        row += "*";
    }
    console.log(row)
}


// Print a number triangle pattern.


for (let i = 1; i <= triangle; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {
        row += j + " ";
    }

    console.log(row);
}



