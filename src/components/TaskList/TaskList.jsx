import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({data})=>{
    return(
           <div
  id="tasklist"
  className="overflow-x-auto flex h-[360px] mt-10 w-full rounded-md p-6 flex-nowrap"
>
  {data?.tasks?.map((task, idx) => {
    if (task.newTask) {
      return <NewTask key={idx} data={task} />;
    }

    if (task.active) {
      return <AcceptTask key={idx} data={task} />;
    }

    if (task.completed) {
      return <CompleteTask key={idx} data={task} />;
    }

    if (task.failed) {
      return <FailedTask key={idx} data={task} />;
    }

    return null;
  })}
</div>

    )
}

export default TaskList;
