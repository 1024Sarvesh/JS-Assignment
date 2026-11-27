//  Create a recursive function to generate Fibonacci numbers. 

function fibonacci(n) {
    let a = 0;
    let b = 1;
    for (let i = 1; i <= n; i++) {
        console.log(a);

        let next = a + b;
        a = b;
        b = next;
    }
}

fibonacci(10)

//  Create a recursive function to calculate the sum of digits.

function sumOfDigits(n) {
    n = Math.abs(n);

    if (n === 0) {
        return 0;
    }

    return (n % 10) + sumOfDigits(Math.floor(n / 10));
}

console.log(sumOfDigits(1234));


// Demonstrate global scope and local scope. 

let name = "Rahul";

function showName() {
    let age = 20;

    console.log("Name:", name);
    console.log("Age:", age);
}
showName();
console.log(name);
// console.log(age);


// . Demonstrate block scope using let and const. 

{
    let a = 10;
    const b = 20;

    console.log(a);
    console.log(b);
}

// console.log(a);
// console.log(b);

// . Demonstrate function hoisting and explain its limitations.


greet();

function greet() {
    console.log("Hello JavaScript!");
}

// const sayHello = function() {
//     console.log("Hello!");
// };

// sayHello();

// const greet = () => {
//     console.log("Welcome!");
// };

// greet();

// Create a counter function using closures. 

function counter() {
    let count = 0;

    return function() {
        count++;
        console.log(count);
    };
}

const increment = counter();

increment()
increment()
increment()
increment()




