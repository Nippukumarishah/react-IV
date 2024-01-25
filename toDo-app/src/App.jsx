import React, { useState } from 'react'
import './App.css'
import TaskItem from './component/TaskItem'
function App() {
  const [tasks, setTasks] = useState([]);
  const [formState, setFormState] = useState({
    task:"",
    completed:false,
    taskAssignedTo: "",
  });
  const handleChange = (e) => {
    const {name, value, type, checked } = e.target;

    setFormState((prevFormState) => ({
      ...prevFormState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formState.task.trim() === "") {
      return;
    }
    setTasks((prevTasks) =>[...prevTasks, {...formState}]);
    setFormState({
      task:"",
      completed:false,
      taskAssignedTo: "",
    });
  };
  const handleDelete = (taskToDelete) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task !== taskToDelete));
  };

  const handleToggle = (taskToToggle) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task === taskToToggle ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input name="task" type="text" placeholder="Add Task" value={formState.task} onChange={handleChange} />
          <label>
            Completed:
            <input name="completed" type="checkbox"  checked={formState.completed} onChange={handleChange} />
          </label>
          <select name="taskAssignedTo" value={formState.taskAssignedTo} onChange={handleChange}>
            <option value="">Select Assignee</option>
            <option value="Bruce">Bruce</option>
            <option value="Barry">Barry</option>
            <option value="Clark">Clark</option>
            <option value="Oliver">Oliver</option>
            <option value="Jina">Jina</option>
          </select>
          <button type="submit">Add Task</button>
        </form>
      </div>
      <hr />
      {tasks.map((item, index) => (
        <TaskItem key={index} item={item} onDelete={handleDelete} onToggle={handleToggle}/>
      ))}
    </>
  )
}

export default App
