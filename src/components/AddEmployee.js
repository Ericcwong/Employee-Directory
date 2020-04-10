import React, { Component } from 'react'
import axios from "axios";
export default class AddEmployee extends Component {
    // Setting the component's initial state
    constructor(props){
        super(props)
        this.state = {
            employee:
              {
                  firstName: "",
                  lastName: "",
                  email: "",
                  position: ""
              }
            
          };
    }

    handleInputChange = event => {
        let value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        });
    };
    handleFormSubmit = event =>{
        event.preventDefault();
        if(!this.state.firstName || !this.state.lastName){
            alert("Please enter a first and last name.")
        }else if (!this.state.email){
            alert("Please enter an email address.")
        }else if(!this.state.position){
            alert("Please enter in a position.")
        }else{
            alert("Employee added!")
        }
        const employee = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            position: this.state.position
          };
        console.log(employee);

        axios.post("http://localhost:9000/api/employees", employee)
          .then(res => console.log(res.data));

    }
    render(){
        return (
            <div>
                <h4>Add an Employee</h4>
                <form className="form">
                    <input
                        value={this.state.firstName}
                        name="firstName"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="First Name"
                    />
                    <input
                        value={this.state.lastName}
                        name="lastName"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Last Name"
                    />
                    <input
                        value={this.state.email}
                        name="email"
                        onChange={this.handleInputChange}
                        type="email"
                        placeholder="Email:"
                    />
                    <input
                        value={this.state.position}
                        name="position"
                        onChange={this.handleInputChange}
                        type="position"
                        placeholder="Employee Position"
                    />
                    <button onClick={this.handleFormSubmit}>Submit</button>
                </form>
            </div>
        );
    }
};

