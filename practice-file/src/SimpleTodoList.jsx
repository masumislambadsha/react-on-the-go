import React, { useState } from "react";

const TodoApp = () => {
  const [task, setTask] = useState("");     // input value
  const [tasks, setTasks] = useState([]);   // list of tasks

  // Add a new task
  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, task]);
    setTask(""); // clear input
  };

  // Delete task
  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px", fontFamily: "Arial" }}>
      <h2 style={{ fontWeight: "bold" }}>Simple Todo List</h2>

      {/* Input and Add button */}
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
        style={{ padding: "8px", marginRight: "8px", width: "200px" }}
      />
      <button
        onClick={addTask}
        style={{
          padding: "8px 16px",
          border: "1px solid #ccc",
          cursor: "pointer",
        }}
      >
        Add
      </button>

      {/* Task list */}
      <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
        {tasks.map((t, index) => (
          <li
            key={index}
            style={{
              margin: "10px 0",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <span>{t}</span>
            <button
              onClick={() => deleteTask(index)}
              style={{
                backgroundColor: "red",
                color: "white",
                border: "none",
                padding: "6px 12px",
                cursor: "pointer",
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
