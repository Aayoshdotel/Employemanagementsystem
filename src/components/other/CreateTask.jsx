import React, { useState } from "react";

function CreateTask({setRefresh}) {

  const [taskTitle , setTaskTitle] = useState('')
  const [taskDate , setTaskDate] = useState('')
  const [taskAssign , setTaskAssign] = useState('')
  const [taskCategory , setTaskCategory] = useState('')
  const [taskDisc , setTaskDisc] = useState('')



  function submitHandle(e) {
    e.preventDefault();
    
    const newTask = {
      active: false,
      newTask: true,
      completed: false,
      failed: false,
      taskTitle,
      taskDescription: taskDisc,
      taskDate,
      category: taskCategory,
    }
    


    const data = JSON.parse(localStorage.getItem('employees')) || [];
    let taskAssigned = false;
    
    data.forEach(((elem)=>{
      if(taskAssign.toLowerCase() === elem.firstName.toLowerCase()){
        elem.tasks.push(newTask)
        elem.taskCount.newTask = elem.taskCount.newTask + 1
        taskAssigned = true
      }

    }))

    if (!taskAssigned) {
      alert('Employee not found')
      return
    }

    localStorage.setItem('employees', JSON.stringify(data))

    setRefresh(prev => !prev)

    setTaskTitle('')
    setTaskDate('')
    setTaskAssign('')
    setTaskCategory('')
    setTaskDisc('')
  }

  return (
    <div className="min-h-120">
      <div className="max-w-6xl mx-auto mt-2.5 px-6">
        <div className="bg-gray-100 rounded-2xl shadow-2xl p-8 flex gap-10">

          <form onSubmit={submitHandle} className="flex w-full gap-10">

            <div className="flex-1 flex flex-col gap-5">

              <div>
                <h3 className="text-sm font-medium mb-2 text-gray-700">
                  Task Title
                </h3>
                <input
                  value={taskTitle}
                  onChange={(e)=>{
                    setTaskTitle(e.target.value)
                  }}
                  required
                  minLength={3}
                  maxLength={50}
                  placeholder="Make a UI Design"
                  className="w-full border px-4 py-2 rounded-lg"
                />
              </div>

              <div>
                <h3 className="text-sm font-medium mb-2 text-gray-700">
                  Date
                </h3>
                <input
                  value={taskDate}
                   onChange={(e)=>{
                    setTaskDate(e.target.value)
                  }}
                  type="date"
                  required
                  className="w-full border px-4 py-2 rounded-lg"
                />
              </div>

              <div>
                <h3 className="text-sm font-medium mb-2 text-gray-700">
                  Assign To
                </h3>
                <input
                  value={taskAssign}
                  onChange={(e)=>{
                    setTaskAssign(e.target.value)
                  }}
                  required
                  minLength={2}
                  placeholder="Employee Name"
                  className="w-full border px-4 py-2 rounded-lg"
                />
              </div>

              <div>
                <h3 className="text-sm font-medium mb-2 text-gray-700">
                  Category
                </h3>
                <input
                  value={taskCategory}
                  onChange={(e)=>{
                    setTaskCategory(e.target.value)
                  }}
                  required
                  minLength={2}
                  placeholder="Design, Development etc."
                  className="w-full border px-4 py-2 rounded-lg"
                />
              </div>

            </div>

            <div className="flex-1 flex flex-col">

              <h3 className="text-sm font-medium mb-2 text-gray-700">
                Description
              </h3>

              <textarea
                value={taskDisc}
                 onChange={(e)=>{
                    setTaskDisc(e.target.value)
                  }}
                required
                minLength={10}
                placeholder="Write task details..."
                className="flex-1 min-h-[220px] border px-4 py-3 rounded-lg resize-none"
              />

              <button
                type="submit"
                className="mt-5 bg-green-600 hover:bg-green-700 text-white font-medium py-3 rounded-lg"
              >
                Create Task
              </button>

            </div>

          </form>

        </div>
      </div>
    </div>
  );
}

export default CreateTask;
