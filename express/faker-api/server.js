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
    phoneNumber: faker.phone.number()
  };
  return newFakeUser;
};

const createCompany = () => {
  const newFakeCompany = {
    _id: faker.finance.account(5),
    name: faker.company.name(),
    address: {
      street: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.state(),
      zipCode: faker.address.zipCode(),
      country: faker.address.country()
    }
  };
  return newFakeCompany;
};
    
const newCompany = createCompany();
console.log(newCompany);

const newUser = createUser();
console.log(newUser);

app.get("/api/users/new", (req, res) => {
  res.json( newUser );
});

app.get("/api/companies/new", (req, res) => {
  res.json( newCompany );
});

app.get("/api/user/company", (req, res) => {
  res.json( [newUser, newCompany] );
});

// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );