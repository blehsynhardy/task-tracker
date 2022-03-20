import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, link } from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer';
import Tasks from './component/Tasks';
import AddTasks from './component/AddTasks';
import About from './component/About';


function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const  [tasks, setTasks ] = useState([])

useEffect(() => {
      const getData = async () => {
      const taskFromJsonServer  = await fetchTask()
      setTasks(taskFromJsonServer)
    } 
    getData()
}, []);

//fetchTask
const fetchTask = async () => {
  const res = await fetch('http://localhost:5000/tasks');
  const data = await res.json();
  return data

}

//fetchSingleTask
const fetchSingleTask = async (id) => {
  const res = await fetch( `http://localhost:5000/tasks/${id}`);
  const data = await res.json();
  return data

}

// Add Task
const addTask = async (task) => {
  const res = await fetch('http://localhost:5000/tasks', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body:JSON.stringify(task)
  })

  const data = await res.json();

  setTasks([...tasks, data]);
  //const id = Math.floor(Math.random() * 10000) + 1;
  //const newTask = { id, ...task }
  //setTasks([...tasks, newTask])
}

//Delete Task
const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    })
    setTasks(tasks.filter((task) => task.id !== id))
} 

//Toggle reminder
const toggleReminder = async (id) => {
  const updateReminder = await fetchSingleTask(id);
  const updateTask = {...updateReminder, reminder:!updateReminder.reminder};

  const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method:'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updateTask)

  })
  const data = await res.json();
  //console.log(data);
   setTasks(
     tasks.map((task)=> task.id === id ? {...task, reminder: data.reminder} : task
        )
     )

}
 
function Pages() {
    return (
      <div className="container">
            <Header showAdd = {() => setShowAddTask(!showAddTask)} onAdd = {showAddTask} />
            { showAddTask && <AddTasks onAdd={addTask}/> }
            {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete ={deleteTask} onToggle={toggleReminder} /> ) : ("No Task to be Showned")}
            <Footer/>
          </div>  
    )
}

  return ( 

    <BrowserRouter>
     <Routes>
        <Route path="/" element={<Pages />} />
        <Route path="/About" element={<About/>}/>
      </Routes>
   </BrowserRouter>
  );
}

export default App;
