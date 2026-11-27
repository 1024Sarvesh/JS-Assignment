//  Count the number of words in a sentence. 

let sentence = "I love learning JavaScript";
let words = sentence.trim().split(/\s+/);
let count = sentence.trim() === "" ? 0 : words.length;
console.log("Total words:", count);


// Find the longest word in a sentence


let sentence1 = "JavaScript is a powerful programming language";

let words1 = sentence1.split(" ");

let longest = "";

for (let word of words1) {
    if (word.length > longest.length) {
        longest = word;
    }
}

console.log("Longest word:", longest);


//  Capitalize the first letter of every word in a sentence

let sentence2 = "hello world javascript";

let result = sentence2.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

console.log(result);


// Remove all spaces from a string


let str = "Hello World JavaScript";

let result1 = str.replace(/\s/g, "");

console.log(result1);

// Check whether two strings are anagrams

let str1 = "listen";
let str2 = "silent";

let a = str1.split("").sort().join("");
let b = str2.split("").sort().join("");

if (a === b) {
    console.log("Anagrams");
} else {
    console.log("Not Anagrams");
}


// Create a username generator using a random number


let name = "Rahul";

let randomNumber = Math.floor(Math.random() * 1000);

let username = name.toLowerCase() + randomNumber;

console.log("Username:", username);