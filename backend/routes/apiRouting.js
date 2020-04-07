const router = require("express").Router();
const Employee = require("../models/employee.models");

//Creates an Employee (Create)
router.route("/api/employees").post((req,res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const position = req.body.position;

    const Employee = new Employee({
        day:{type: Date, default: Date.now},
        employee: [
            {         
                firstName,
                lastName,
                email,
                position
            }
        ]
    });
    Employee.save()
        .then(()=> res.json("Employee added!"))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

//Finds all Employees (Read)
router.route("/api/employees").get((req,res) => {
    Employee.find({})
        .then(employees => res.json(employees))
        .catch(err => res.status(400).json(`Error:${err}`));
});

//Updates an Employee (Update)
// router.route("/api/employees/update/:id").post((req, res) =>{
//     Employee.findById(req.params.id)
//         .then(employee => {
//             employee.firstName = req.body.firstName,
//             employee.lastName = req.body.lastName,
//             employee.email = req.body.email,
//             employee.position = req.body.position

//             employee.save()
//                 .then(() => res.json("Employee has been updated!"))
//         })
//         .catch(err => res.status(400).json(`Error: ${err}`))
// })

//Deletes an Employee(Delete)
router.route("/api/employees/:id").delete((req, res) =>{
    Employee.findByIdAndDelete(req.params.id)
        .then(() => res.json("Employee Deleted!"))
        .catch(err => res.status(400).json(`Error:${err}`));
})


module.exports = router;