import React from 'react'

const AppLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
      <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl shadow-md">
        <div className='flex items-center mt-7 gap-2'>
          <h2 className="text-2xl font-semibold">📋 Doing it...</h2>
         </div>
        {children}
      </div>
    </div>
  )
}

export default AppLayout