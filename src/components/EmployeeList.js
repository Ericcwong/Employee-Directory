import React,{Component} from "react";
import axios from "axios";
// import Select from "react-select";

const Employee = props =>  (
    
    <tr>
        <td>{props.employees.employee.firstName}</td>
        <td>{props.employees.employee.lastName}</td>
        <td>{props.employees.employee.email}</td>
        <td>{props.employees.employee.position}</td>
        <td><a href="youtube.com" onClick={() => {props.removeEmployee(props.employees._id)}}>Delete</a></td>
    </tr>
)
 

export default class EmployeeList extends Component {

    constructor(){
        super();
        this.state = {
            employees: [],
            search: "",
            select: []
        }
    
    }

updateSearch(event){
    event.preventDefault();
    this.setState({search: event.target.value})
    console.log(event.target.value)
}
    componentDidMount(){
        axios.get("http://localhost:9000/api/employees/")
            .then(res => {
                this.setState({employees: res.data}) 

            })
            .catch((error)=> {
                console.log(error)
            })
    }
    removeEmployee(id){
        axios.delete("/api/employees/" + id)
        .then(res => console.log(res.data));
        this.setState({
            employees: this.state.employees.filter((_id) => _id !== id)
        })
    }
    // const selectOptions = (option,rawInput) => {
    //     const words = rawInput.split(" ");

    // }
    employeeList(){
        let filteredEmployee = this.state.employees.filter(
            (employee) => {
                return employee.employee.firstName.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
                 || employee.employee.lastName.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
                 || employee.employee.email.toLowerCase().indexOf(this.state.search.toLowerCase()) !==-1
                 || employee.employee.position.toLowerCase().indexOf(this.state.search.toLowerCase()) !==-1;
            }
        )
        return filteredEmployee.map(employee => {
            return <Employee employees={employee} removeEmployee={this.removeEmployee} key={Employee._id}/>;
        })
    }
    render(){
        return (
            <div>
                <h3 style={{textAlign:"center"}}>Employees</h3>
                <br></br>
                <p>Search Employees by First or Last Name, Email, or Position</p>
                <input type="text"
                    value={this.state.search}
                    onChange={this.updateSearch.bind(this)}
                    placeholder="Enter here!"/>
                {/* <Select options={this.state.select.employee}/> */}
                <table className="table">
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Position</th>
                    </tr>
                    <tbody>
                        {this.employeeList()}
                        {console.log(this.employeeList())}
                    </tbody>
                </table>
            </div>
        )
    }
}
