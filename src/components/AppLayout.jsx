import { useEffect, useState } from "react"

const AppLayout = ({ children }) => {
  const [isDark, setIsDark ] = useState(false)

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark])

  const handleToggle = () => {
    console.log("Toggling dark mode:", !isDark);
    setIsDark(!isDark);
  }

  return (
    <main className="min-h-screen bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100 flex items-center justify-center p-4 transition-colors">
      <div className="bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl shadow-md">
        <div className='flex items-center justify-between mt-5 mb-4 gap-2'>
          <header className="flex items-center gap-2">
            <img className="w-12 object-contain" src="/justDoIt.png" alt="Just Do It logo"/>
            <h1 className="text-2xl font-bold">Doing it...</h1>
          </header>
            <button
              onClick={handleToggle}
              className="text-sm bg-slate-200 dark:bg-slate-700 dark:text-slate-100 px-2 py-1 rounded hover:bg-indigo-300 dark:hover:bg-slate-400"
            >
              <span aria-hidden="true">
                {isDark ? "☀️" : "🌙"}
              </span>
              <span className="hidden xs:inline">
                {isDark ? " Light" : " Dark"}
              </span>
            </button>
         </div>
        {children}
      </div>
    </main>
  )
}

export default AppLayout