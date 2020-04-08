import React,{Component} from 'react'
import axios from "axios";

const Employee = props =>  (
    
    <tr>
        <td>{props.employee.employee.firstName}</td>
        <td>{props.employee.employee.lastName}</td>
        <td>{props.employee.employee.email}</td>
        <td>{props.employee.employee.position}</td>
    </tr>
)
 

export default class EmployeeList extends Component {

    constructor(props){
        super(props);
        this.state = {employees: []};
    }

    componentDidMount(){
        axios.get("http://localhost:9000/api/employees/")
            .then(res => {
                this.setState({employees: res.data})
                console.log(res)
            })
            .catch((error)=> {
                console.log(error)
            })
    }
    removeEmployee(id){
        axios.delete("/api/employees/" + id)
        .then(res => console.log(res.data));
        this.setState({
            employee: this.state.employees.filter(el => el._id !== id)
        })
    }
    employeeList(){
        return this.state.employees.map(Newemployee => {
            return <Employee employee={Newemployee} removeEmployee={this.removeEmployee} key={Employee._id}/>;
        })
    }
    render(){
        return (
            <div>
                <h3>Employees</h3>
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
