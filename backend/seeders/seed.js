const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect("mongodb://ericcwong:password1@ds263847.mlab.com:63847/heroku_cr5n4dh4", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true
});

let employeeSeed = [
  {
    day: new Date().setDate(new Date().getDate()),
    employee: [
      {
        firstName: "Eric",
        lastName: "Wong",
        email: "ericwong12@live.com",
        position: "Full stack developer"
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()),
    employee: [
      {
        firstName: "Elizabeth",
        lastName: "Osenback",
        email: "test@test.com",
        position: "EMT"
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()),
    employee: [
      {
        firstName: "Billy",
        lastName: "Bob",
        email: "billybob@billbob.com",
        position: "Farmer"
      }
    ]
  },  {
    day: new Date().setDate(new Date().getDate()),
    employee: [
      {
        firstName: "Apu",
        lastName: "Nahasapeemapetilon",
        email: "A_nahasapeemapetilon@kwikemart.com",
        position: "Kwik-E-Mart worker"
      }
    ]
  }
];

db.Employee.deleteMany({})
  .then(() => db.Employee.collection.insertMany(employeeSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
