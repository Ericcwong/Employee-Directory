import React from "react";
// import { BrowserRouter as Router, Route} from "react-router-dom";
import HomePage from "./components/HomePage";
import AddEmployee from "./components/AddEmployee";
import EmployeeList from "./components/EmployeeList";

function App(){
    return (
        <div className = "container">
    <HomePage />
    <AddEmployee />
    <EmployeeList />
    </div>
    )
}

export default App;