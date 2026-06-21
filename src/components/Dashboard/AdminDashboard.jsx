import React from "react";
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllTask from "../other/AllTask";

function AdminDashboard(props){
    return(
        <div className="flex flex-col h-screen w-full p-2">
            <Header changeUser = {props.changeUser} />
            <CreateTask setRefresh = {props.setRefresh} />
            <AllTask refresh = {props.refresh} />
        </div>
    )
}

export default AdminDashboard
