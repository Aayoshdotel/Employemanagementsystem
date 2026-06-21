import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/Authprovider";

function AllTask({ refresh }) {
  const authData = useContext(AuthContext);

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("employees")) || [];
    setEmployees(data);
  }, [refresh]);

  return (
    <div className="bg-stone-200 p-5 rounded-lg">
      
      <div className="flex bg-red-500 text-white py-3 px-4 rounded-md mb-3 font-semibold">
        <h2 className="w-1/5">Name</h2>
        <h3 className="w-1/5 text-center">Active</h3>
        <h3 className="w-1/5 text-center">New</h3>
        <h3 className="w-1/5 text-center">Completed</h3>
        <h3 className="w-1/5 text-center">Failed</h3>
      </div>

      {employees.map((elem) => (
        <div
          key={elem.id}
          className="flex items-center bg-white py-3 px-4 rounded-md mb-2 shadow-sm border"
        >
          <h2 className="w-1/5 font-medium text-lg">
            {elem.firstName}
          </h2>

          <h3 className="w-1/5 text-center text-lg" style={{ color: "#eab308" }}>
            {elem.taskCount.active}
          </h3>

          <h3 className="w-1/5 text-center text-lg" style={{ color: "#3b82f6" }}>
            {elem.taskCount.newTask}
          </h3>

          <h3 className="w-1/5 text-center text-lg" style={{ color: "#16a34a" }}>
            {elem.taskCount.completed}
          </h3>

          <h3 className="w-1/5 text-center text-lg" style={{ color: "#ef4444" }}>
            {elem.taskCount.failed}
          </h3>
        </div>
      ))}
    </div>
  );
}

export default AllTask;