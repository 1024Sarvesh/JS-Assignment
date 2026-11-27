// Create a function that prints Hello World.

function Print() {
    console.log("Hello World")
}
Print()


// Create a function that accepts a name and prints a welcome message. 

function Welcome(name) {
    console.log(`Welcome ${name}!`)
}
Welcome("Sarvesh Kumar")

// Create a function that adds two numbers. 


function Add(num1, num2) {
    console.log(num1 + num2)
}
Add(4, 5)


// Create a function that subtracts two numbers. 

function subtracts(num1, num2) {
    console.log(num1 - num2)
}
subtracts(4, 5)


// Create a function that multiplies two numbers. 


function Multiply(num1, num2) {
    console.log(num1 * num2)
}

Multiply(4, 5)


// Create a function that divides two numbers with zero-division validation. 

function divide(numerator, denominator) {
    if (denominator === 0) {
        throw new Error("Cannot divide by zero.");
    }

    console.log(numerator / denominator)
}

divide(4, 2)

// Create a function that checks whether a number is even or odd. 

function evenOdd(num) {
    if (num % 2 === 0) {
        console.log("Number is Even")
    } else {
        console.log("Number is Odd")
    }
}

evenOdd("7")

// Create a function that returns the square of a number. 


function Square(num) {
    let sqr = num ** 2;
    console.log(sqr)
}
Square("5")

// Create a function that calculates the area of a rectangle. 

function areaRectangle(l, h) {
    const area = l * h
    console.log(area)
}

areaRectangle(12, 15)

// Create a function that converts Celsius into Fahrenheit. 

function celsiusToFahrenheit(celsius) {
    let convert = (celsius * 9 / 5) + 32;
    console.log(convert)
}

celsiusToFahrenheit(20)


// Create a function that calculates student percentage. 


function percentage(obtainedNumber, totalNumber) {
    const percent = (obtainedNumber / totalNumber) * 100;
    console.log(percent)
}
percentage(504, 600)

//  Create a function that returns the greatest of three numbers. 

function Greatest(x, y, z) {
    if (x > y && x > z) {
        console.log(x + " is greater than " + y + " and " + z)
    } else if (y > x && y > z) {
        console.log(y + " is greater than " + x + " and " + z)

    } else if (z > x && z > y) {
        console.log(z + " is greater than " + x + " and " + y)
    } else {
        console.log(x + " is equal to" + y + " and " + z)
    }
}

Greatest(12, 13, 14)

// Convert a normal function into an arrow function. 

function add(a, b) {
    const sum = a + b;
    console.log(sum)
}

const addition = (a, b) => {
    const sum = a + b;
    console.log(sum)
};

add(12, 14)



// Create a function with default parameters. 

const calculateTotal = (price, taxRate = 0.05) => {
    console.log(price + (price * taxRate))
};

calculateTotal(1200)

//  Create a function that accepts any number of arguments using rest parameters. 

function rest(...num) {

    console.log(num)
}


rest(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)



//  Create a function that returns another function.

function nested() {
    const add = () => {
        console.log("Hello Sarvesh")
    }
    add()
}

nested()

// Create a callback function to perform arithmetic operations. 

const Arithmetic = (num1, num2) => {
    let addition = num1 + num2;
    let subtract = num1 - num2;
    let divide = num1/num2;
    let multiply = num1 * num2;
    let denominator = num1 % num2;

    console.log(addition,subtract,divide,multiply,denominator)
}

Arithmetic(4,2)

//  Create a function that calculates factorial using recursion. 


function factorial(n) {
    let multiply = 1;
  for(let i = n;i>=1;i--){
    multiply = multiply * i
  }

  console.log(multiply)
}
 factorial(5)