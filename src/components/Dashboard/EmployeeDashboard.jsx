import React from "react";
import Header from "../other/Header";
import TaskListNumber from "../other/TaskListNumber";
import TaskList from "../TaskList/TaskList";

function EmployeeDashboard() {
  return (
    <div className="min-h-screen bg-white-100">
      <Header />
      <div className="p-6">
        <TaskListNumber />
        <TaskList/>
      </div>
    </div>
  );
}

export default EmployeeDashboard;