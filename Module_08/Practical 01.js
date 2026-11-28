// Create an array of five student names. 

const StudentName = ["rahul", "sohan", "mohit", "sisira", "fatima"]

// Print the first element of an array. 

let element1 = StudentName[0]
console.log(element1)

// Print the last element of an array. 

let lastEle = StudentName[StudentName.length - 1]
console.log(lastEle)


//  Find the length of an array. 

const len = StudentName.length
console.log(len)


// Add an element using push(). 

let add = StudentName.push("sarvesh")
console.log(StudentName)



// Remove the last element using pop(). 


const remove = StudentName.pop()
console.log(StudentName)

// Add an element at the beginning using unshift(). 

const FirstEl = StudentName.unshift("sarvesh");
console.log(StudentName)


// Remove the first element using shift(). 


const LastEl = StudentName.shift()
console.log(StudentName)

// Update an existing array element. 

const fruits = ["apple", "banana", "cherry"];
fruits[1] = "blueberry";
console.log(fruits);


// Print every element using a for loop. 

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}

// Print every element using a for...of loop. 

for (const fruit of fruits) {
    console.log(fruit)
}

// Find the sum of all numbers in an array. 


const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = 0;
for (let i = 0; i < number.length; i++) {

    sum = sum + number[i]
}
console.log(sum)

// Calculate the average of array elements. 

let Total = sum;
let length = number.length
let avg = sum / length;
console.log(avg)

// Find the maximum number in an array. 

const maxNum = Math.max(...number)

console.log(maxNum)

//  Find the minimum number in an array. 

const min = Math.min(...number)
console.log(min)

// Count even and odd numbers in an array. 
let even = 0;
let odd = 0;
for (let i = 0; i < number.length; i++) {

    if (number[i] % 2 === 0) {
        even++;
    } else {
        odd++
    }
}
console.log(even)
console.log(odd)


// Create a new array containing only even numbers. 


const evenNum = number.filter(num => num % 2 === 0);
console.log(evenNum)

// Search for a particular element in an array


let search = 30;

if (number.includes(search)) {
    console.log("Element found");
} else {
    console.log("Element not found");
}

//  Check whether an array contains duplicate values.


let arr = [10, 20, 30, 20, 40];

let hasDuplicate = false;

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
            hasDuplicate = true;
            break;
        }
    }
}

console.log(hasDuplicate);

// Remove duplicate elements from an array


let removeduplicate = [];

for (let i = 0; i < arr.length; i++) {
    if (!removeduplicate.includes(arr[i])) {
        removeduplicate.push(arr[i]);
    }
}

console.log(removeduplicate);



// Reverse an array without using the built-in reverse() method


let reversed = [];

for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
}

console.log(reversed);


// Sort an array in ascending order



let arr1 = [50, 20, 40, 10, 30];
for (let i = 0; i < arr1.length; i++) {
    // console.log(arr1[i])

    for (let j = 0; j < arr1.length - 1 - i; j++) {

        if (arr1[j] > arr1[j + 1]) {
            let swap = arr1[j];
            arr1[j] = arr1[j + 1];
            arr1[j + 1] = swap;
        }
    }
}

console.log(arr1)

// Merge two arrays. 



let arr2 = [10, 20, 30];
let arr3 = [40, 50, 60];

let mix = [];

for (let i = 0; i < arr2.length; i++) {
    mix.push(arr2[i]);
}

for (let i = 0; i < arr3.length; i++) {
    mix.push(arr3[i]);
}

console.log(mix);


// Find common elements between two arrays


let arr4 = [10, 20, 30, 40, 50];
let arr5 = [30, 40, 50, 60, 70];

let common = [];

for (let i = 0; i < arr4.length; i++) {
    if (arr5.includes(arr4[i])) {
        common.push(arr4[i]);
    }
}

console.log(common);