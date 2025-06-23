import { useState } from "react"

import { CompletedTaskList } from "./CompletedTaskList"
import { TaskList } from "./TaskList"

export const Tabs = () => {
const [activeTab, setActiveTab] = useState("todo")

  return (
    <div className="w-full mt-6">
      <div className="flex justify-center gap-4 mb-6">
        <button 
          onClick={() => setActiveTab("todo")}
            className={`px-4 py-2 text-sm font-medium rounded-full transition 
              ${activeTab === "todo"
              ? "bg-slate-700 text-white"
              : "bg-slate-200 text-slate-700 hover:bg-slate-300"}`}
            >
          Pending Tasks
        </button>
        <button
          onClick={() => setActiveTab("completed")}
            className={`px-4 py-2 text-sm font-medium rounded-full transition 
              ${activeTab === "completed"
              ? "bg-slate-700 text-white"
              : "bg-slate-200 text-slate-700 hover:bg-slate-300"}`}
            >
          Completed Tasks
        </button>
      </div>
      <div
        className={`transition-opacity duration-500 ease-out 
          ${activeTab === "todo" 
          ? "opacity-100" 
          : "opacity-30"}`}
      >
        {activeTab === "todo" && <TaskList />}
        {activeTab === "completed" && <CompletedTaskList />}
      </div>
    </div>
  )
}