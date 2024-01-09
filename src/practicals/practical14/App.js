// App.js
import React, { useState } from 'react';
import './Style.css';

const App = () => {
  // State variables for task, due date, due time, and list of tasks
  const [task, setTask] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [dueTime, setDueTime] = useState('');
  const [tasks, setTasks] = useState([]);

  // Function to add a new task
  const addTask = () => {
    if (task.trim() !== '') {
      // Create a new task object
      const newTask = {
        task: task,
        dueDate: dueDate,
        dueTime: dueTime,
        completed: false,
      };

      // Update the list of tasks
      setTasks([...tasks, newTask]);

      // Clear input fields
      setTask('');
      setDueDate('');
      setDueTime('');
    }
  };

  // Function to toggle the completion status of a task
  const toggleCompleted = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  // Function to delete a task
  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className="app">
      <h1>Todo List</h1>
      {/* Input fields for task, due date, and due time */}
      <div className="task-input">
        <input
          type="text"
          placeholder="Enter your task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <input
          type="time"
          value={dueTime}
          onChange={(e) => setDueTime(e.target.value)}
        />
        {/* Button to add a new task */}
        <button onClick={addTask}>Add Task</button>
      </div>
      {/* List of tasks */}
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className={task.completed ? 'completed' : ''}>
            <div>
              {/* Display task and due date/time */}
              <p>{task.task}</p>
              <p>{task.dueDate && task.dueTime && `Due: ${task.dueDate} ${task.dueTime}`}</p>
            </div>
            <div>
              {/* Checkbox to toggle completion status */}
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleCompleted(index)}
              />
              {/* Button to delete a task */}
              <button onClick={() => deleteTask(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
      {/* Instructions for users */}
      <div className="instructions">
        <p><strong>How to Use:</strong></p>
        <p>1. Enter your task in the text field.</p>
        <p>2. Optionally, set a due date and time for the task.</p>
        <p>3. Click "Add Task" to add it to your list.</p>
        <p>4. Check the box to mark a task as completed.</p>
        <p>5. Click "Delete" to remove a task from the list.</p>
      </div>
    </div>
  );
};

export default App;
