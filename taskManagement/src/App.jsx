import { useState } from 'react'
import tasks from './assets/tasks.js'
import AllTasks from './components/AllTasks'
function App() {

  return (
    <>
      <AllTasks tasks={tasks}/>
    </>
  )
}

export default App
