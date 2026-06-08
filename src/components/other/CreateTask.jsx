import React from "react";

function CreateTask(){
    return(
        <div className="min-h-120">

  <div className="max-w-6xl mx-auto mt-2.5 px-6">
    <div className="bg-gray-100 rounded-2xl shadow-2xl p-8 flex gap-10">
      
      {/* Left Side */}
      <form className="flex-1 flex flex-col gap-5">
        
        <div>
          <h3 className="text-sm font-medium mb-2 text-gray-700">
            Task Title
          </h3>
          <input
            type="text"
            placeholder="Make a UI Design"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <h3 className="text-sm font-medium mb-2 text-gray-700">
            Date
          </h3>
          <input
            type="date"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <h3 className="text-sm font-medium mb-2 text-gray-700">
            Assign To
          </h3>
          <input
            type="text"
            placeholder="Employee Name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <h3 className="text-sm font-medium mb-2 text-gray-700">
            Category
          </h3>
          <input
            type="text"
            placeholder="Design, Development etc."
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </form>

      {/* Right Side */}
      <div className="flex-1 flex flex-col">
        <h3 className="text-sm font-medium mb-2 text-gray-700">
          Description
        </h3>

        <textarea
          placeholder="Write task details..."
          className="flex-1 min-h-[220px] border border-gray-300 rounded-lg px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button className="mt-5 bg-green-600 hover:bg-green-700 text-white font-medium py-3 rounded-lg transition">
          Create Task
        </button>
      </div>
    </div>
  </div>
</div>
    )
}

export default CreateTask
