const express = require("express");
const app = express();
const port = 8000;

// we can create a function to return a random / fake "Product"
const { faker } = require('@faker-js/faker');
const createProduct = () => {
    const newFake = {
        name: faker.commerce.productName(),
        price: "$" + faker.commerce.price(),
        department: faker.commerce.department()
    };
    return newFake;
};
    
const newFakeProduct = createProduct();
console.log(newFakeProduct);

app.get("/api", (req, res) => {
  res.json({ message: "Hello World" });
});

// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );