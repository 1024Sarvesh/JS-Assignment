// Create a string containing your full name and print it. 


let Name = "Sarvesh Kumar"

console.log(Name)

// Find the length of a string. 

console.log(Name.length)

// Convert a string into uppercase. 

let uppercase = Name.toUpperCase()
console.log(uppercase)

// Convert a string into lowercase. 


let lowercase = Name.toLowerCase()

console.log(lowercase)

//  Remove whitespace from the beginning and end of a string. 

let whiteSpace = Name.trim()
console.log(whiteSpace)

// Extract the first five characters from a string. 

let Extract = Name.slice(0,5)
console.log(Extract)

// Extract the last five characters from a string. 

let lastExtract = Name.slice(-5)
console.log(lastExtract)


// Find the position of a particular word using indexOf(). 

let position = Name.indexOf("Kumar");

console.log(position);


// Check whether a string contains a specific word. 


let Text = "This is a good boy"

let search = Text.includes("good")

console.log(search)


// Check whether a string starts with a given character. 

let starts = Name.substring(3)
console.log(starts)

// Check whether a string ends with a given character.


let revstarts = Name.substring(-5)
console.log(revstarts)


//  Replace a word in a sentence. 

let replace = Text.replace("good","Intelligent")
console.log(replace)

// Replace all occurrences of a particular word. 

const text = "I love cats. Cats are great, and my cat is sleeping.";
const updatedText = text.replaceAll("cats", "dogs");

console.log(updatedText);

// Split a sentence into an array of words. 

let sentence = "I love JavaScript";

let words = sentence.split(" ");

console.log(words);


// Join multiple words into a single sentence. 

let word = ["I", "love", "JavaScript"];

let sentences = word.join(" ");

console.log(sentences);


// Reverse a string. 

let str = "hello";

let result = str.split("").reverse().join("");

console.log(result);

//  Check whether a string is a palindrome. 


let str1 = "madam";

let reverse = str1.split("").reverse().join("");

if (str1 === reverse) {
    console.log("Palindrome");
} else {
    console.log("Not Palindrome");
}

// Count the number of vowels in a string. 

let str2 = "javascript";
let count = 0;

for (let char of str2) {
    if ("aeiou".includes(char)) {
        count++;
    }
}

console.log(count);


// Count the number of consonants in a string


let str3 = "javascript";
let count1 = 0;

for (let char of str3.toLowerCase()) {
    if (
        char >= "a" &&
        char <= "z" &&
        !"aeiou".includes(char)
    ) {
        count1++;
    }
}

console.log("Consonants:", count1);