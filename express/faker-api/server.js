const express = require("express");
const app = express();
const port = 8000;

// we can create a function to return a random / fake "Product"
const { faker } = require('@faker-js/faker');
const createUser = () => {
  const newFakeUser = {
    _id: faker.finance.account(5),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    phoneNumber: faker.phone.number(),
  };
  return newFakeUser;
};
    
const newUser = createUser();
console.log(newUser);

app.get("/api", (req, res) => {
  res.json(newUser);
});

// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );