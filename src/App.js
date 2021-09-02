import Header from './components/Header';
import Tasks from './components/Tasks';
import {useState} from 'react';
// import React from 'react';

const App = () => {
  const [tasks,setTasks]=useState([
    {
        id:1,
        text:'Doctor Appointment',
        day:'Sept 5th at 2:30pm',
        reminder:true
    },
    {
        id:2,
        text:'Meeting At School',
        day:'Sept 7th at 1:30pm',
        reminder:true
    },
    {
        id:3,
        text:'Food Shopping',
        day:'Sept 5th at 2:30pm',
        reminder:false
    }
])
//Delete task
const deleteTask=(id)=>{
  setTasks(
    tasks.filter((task)=>task.id!==id)
  )
}
//Toggle reminder
const toggleReminder=(id)=>{
  setTasks(
    tasks.map((task)=>task.id===id ? {...task, reminder: !task.reminder} : task
    )
  )
}
  return (
    <div className="container">
      <Header/>
      {tasks.length>0 ? <Tasks 
      tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}
      /> : 'No Tasks To Show'}
    </div>
  );
}




export default App;
