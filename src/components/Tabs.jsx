import { useState } from "react"

import { useTasksStore } from "../stores/useTaskStore"
import { CompletedTaskList } from "./CompletedTaskList"
import { TaskList } from "./TaskList"

export const Tabs = () => {
const [activeTab, setActiveTab] = useState("todo")

const pendingCount = useTasksStore(state => state.getPendingCount())
const completedCount = useTasksStore(state => state.getCompletedCount())
const pulseTab = useTasksStore(state => state.pulseTab)


  return (
    <div className="w-full mt-6 max-w-sm mx-auto">
      <div className="relative flex mr-1 mb-6 border-b border-slate-300 dark:border-slate-600 ">
          <button 
            onClick={() => setActiveTab("todo")}
              className={`w-1/2 px-4 py-2 text-sm font-medium rounded-md transition 
                ${activeTab === "todo"
                ? "bg-slate-700 text-white"
                : "bg-slate-200 text-slate-700 hover:bg-indigo-300"}
                ${pulseTab === "todo"
                ? "animate-pulse-once"
                : ""}`}
              >
          Pending Tasks ({pendingCount})
        </button>
        <button
          onClick={() => setActiveTab("completed")}
            className={`w-1/2 px-4 py-2 text-sm font-medium rounded-md transition 
              ${activeTab === "completed"
              ? "bg-slate-700 text-white "
              : "bg-slate-200 text-slate-700 hover:bg-indigo-300"}
              ${pulseTab === "completed"
              ? "animate-pulse-once"
              : ""}`}
            >
          Completed Tasks ({completedCount})
        </button>
        <span
          className={`absolute bottom-0 left-0 h-1 w-1/2 bg-indigo-500 rounded transition-all duration-300 ease-out transform
            ${activeTab === "completed" ? "translate-x-full" : "translate-x-0"}`}
        />
      </div>
      <div
        className={`min-h-[80px] xs:min-h-[250px] transition-opacity duration-500 ease-out 
          ${activeTab === "todo" 
          ? "opacity-100" 
          : "opacity-50"}`}
      >
        {activeTab === "todo" && <TaskList />}
        {activeTab === "completed" && <CompletedTaskList />}
      </div>
    </div>
  )
}