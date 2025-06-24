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
    <div className="w-full mt-6">
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <button 
          onClick={() => setActiveTab("todo")}
            className={`px-4 py-2 text-sm font-medium rounded-full transition 
              ${activeTab === "todo"
              ? "bg-slate-700 text-white underline"
              : "bg-slate-200 text-slate-700 hover:bg-indigo-300"}
              ${pulseTab === "todo"
              ? "animate-pulse-once"
              : ""}`}
            >
          Pending Tasks ({pendingCount})
        </button>
        <button
          onClick={() => setActiveTab("completed")}
            className={`px-4 py-2 text-sm font-medium rounded-full transition 
              ${activeTab === "completed"
              ? "bg-slate-700 text-white underline"
              : "bg-slate-200 text-slate-700 hover:bg-indigo-300"}
              ${pulseTab === "completed"
              ? "animate-pulse-once"
              : ""}`}
            >
          Completed Tasks ({completedCount})
        </button>
      </div>
      <div
        className={`min-h-[250px] transition-opacity duration-500 ease-out 
          ${activeTab === "todo" 
          ? "opacity-100" 
          : "opacity-40"}`}
      >
        {activeTab === "todo" && <TaskList />}
        {activeTab === "completed" && <CompletedTaskList />}
      </div>
    </div>
  )
}