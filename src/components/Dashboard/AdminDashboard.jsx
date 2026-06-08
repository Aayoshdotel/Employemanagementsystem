import React from "react";
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllTask from "../other/AllTask";

function AdminDashboard(){
    return(
        <div className="flex flex-col h-screen w-full p-2">
            <Header />
            <CreateTask />
            <AllTask />
        </div>
    )
}

export default AdminDashboard
