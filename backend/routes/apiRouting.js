const router = require("express").Router();
const Employee = require("../models/employee.models");

router.route("/api/employees").get((req,res) => {
    Employee.find({})
        .then(employees => res.json(employees))
        .catch(err => res.status(400).json(`Error:${err}`));
});

router.route("/api/employees").post((req,res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const position = req.body.position;

    const employee = new Employee({
        employee: [{        firstName,
            lastName,
            email,
            position}]

    });
    employee.save()
        .then(()=> res.json("Employee added!"))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

module.exports = router;