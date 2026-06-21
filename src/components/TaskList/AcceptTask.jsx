import React from "react";

function AcceptTask({ data }) {
    return(
    <div className="flex-shrink-0 h-80 w-[300px] bg-yellow-200 rounded-xl shadow-md border border-gray-200 mr-6 p-5 flex flex-col justify-between">
  
  {/* Top row */}
  <div className="flex justify-between items-center">
    <span className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-xs font-semibold">
      {data.category}
    </span>

    <span className="text-xs text-gray-500">
      {data.taskDate}
    </span>
  </div>

  {/* Title */}
  <h2 className="mt-4 text-lg font-bold text-gray-800 leading-snug">
    {data.taskTitle}
  </h2>

  {/* Description */}
  <p className="mt-2 text-sm text-gray-600 line-clamp-4">
    {data.taskDescription}
  </p>

  {/* Buttons */}
  <div className="flex gap-2 mt-4">
    <button className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg text-xs font-semibold transition">
      Completed
    </button>

    <button className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg text-xs font-semibold transition">
      Failed
    </button>
  </div>

</div>
    )
}

export default AcceptTask;
