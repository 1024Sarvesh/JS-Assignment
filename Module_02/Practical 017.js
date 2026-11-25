

let products = [];

function addProduct(name, price, availability) {
    let product = {
        name: name,
        price: price,
        availability: true
    };

    products.push(product);
    console.log("Product added successfully!");
}

function displayProducts() {
    console.log("Product List:");

    products.forEach((product, index) => {
        console.log(`Product ${index + 1}`);
        console.log("Name:", product.name);
        console.log("Price: ₹", product.price);
        console.log("Availability:", product.availability);
        console.log("-------------------");
    });
}

addProduct("Laptop", 50000, true);


displayProducts();
