import React from "react";
import { useState, useEffect } from "react";
import Header from "../other/Header";
import TaskListNumber from "../other/TaskListNumber";
import TaskList from "../TaskList/TaskList";

function EmployeeDashboard(props) {

  const [employees, setEmployees] = useState([]);
  useEffect(() => {
  const data = JSON.parse(localStorage.getItem("employees")) || [];
  setEmployees(data);
}, [props.refresh]);
  return (
    <div className="min-h-screen bg-white-100">
      <Header changeUser = {props.changeUser} data ={props.data} />
      <div className="p-6">
        <TaskListNumber data={props.data}/>
        <TaskList data={props.data}/>
      </div>
    </div>
  );
}

export default EmployeeDashboard;