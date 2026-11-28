// Create an object representing a student. 

const student = {
    Name: "Sarvesh Kumar",
    Class: "B.Sc",
    Age: "19",

}

console.log(student)

// Create an object representing a product. 

const product = {
    productname: "Chips",
    Price: "5₨",
    MFG: "12/10/2025",
    EXP: "12/11/2026"
}

console.log(product)

// Access object properties using dot notation. 

console.log(product.Price)
console.log(product.MFG)
console.log(product.EXP)


// Access object properties using bracket notation. 

console.log(product['productname'])


// Update a student's name. 

student.Name = "Sarvesh"

console.log(student)


// Add a new property to an existing object. 

student.city = "Varanasi";
console.log(student)

// Delete a property from an object

delete student.Age;

console.log(student);


// Create an object containing personal details

let person = {
    name: "Amit",
    age: 21,
    city: "Varanasi",
    email: "amit@gmail.com",
    phone: "9876543210"
};

console.log(person);


// Create a nested object representing a student's address

let student1 = {
    name: "Rahul",
    age: 20,
    address: {
        city: "Varanasi",
        state: "Uttar Pradesh",
        pincode: 221001
    }
};

console.log(student1);
console.log(student1.address.city);


// Create an object containing an array of subjects


let student2 = {
    name: "Rahul",
    subjects: ["JavaScript", "HTML", "CSS", "Python"]
};

console.log(student2);
console.log(student2.subjects);


// Create a function inside an object to display student details

let student3 = {
    name: "Rahul",
    age: 20,
    marks: 85,

    displayDetails: function () {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
        console.log("Marks:", this.marks);
    }
};

student3.displayDetails();


// . Use the this keyword inside an object method


let person1 = {
    name: "Amit",
    age: 22,

    show: function () {
        console.log("My name is " + this.name);
        console.log("My age is " + this.age);
    }
};

person1.show();



// Extract object properties using destructuring

let groceries = {
    name: "rice",
    price: "200",
    offer: "10%",

}

let { name, offer, price } = groceries

console.log(name)
console.log(offer)
console.log(price)


// Rename a property during destructuring

let { name: groceryName, offer: groceryOffer } = groceries
console.log(groceryName)
console.log(groceryOffer)

//  Retrieve all object keys using Object.keys().

let keys = Object.keys(student)
console.log(keys)

// Retrieve all object values using Object.values(). 

let values = Object.values(student)
console.log(values)


// Retrieve key-value pairs using Object.entries(). 

let entries = Object.entries(student)
console.log(entries)


//  Merge two objects using the spread operator. 

let student4 = {
    name: "Rahul",
    age: 20
};

let result1 = {
    city: "Varanasi",
    marks: 90
};

let mergedObject = { ...student4, ...result1 };

console.log(mergedObject);

// Copy an object using the spread operator


let copystudent = {...student}
console.log(copystudent)

// Create an array of five student objects

let students = [
    { id: 1, name: "Rahul", marks: 85 },
    { id: 2, name: "Amit", marks: 90 },
    { id: 3, name: "Rohit", marks: 78 },
    { id: 4, name: "Priya", marks: 95 },
    { id: 5, name: "Neha", marks: 88 }
];

console.log(students);

// Find a student by their ID

let studentId = students.find(s => s.id === 2);

console.log(studentId);


// Update a student's marks using their ID


if (studentId) {
    studentId.marks = 95;
}

console.log(students);



// Convert an object into JSON and JSON back into an object

// Object to JSON
let jsonData = JSON.stringify(student);

console.log(jsonData);

// JSON to Object
let newStudent = JSON.parse(jsonData);

console.log(newStudent);



