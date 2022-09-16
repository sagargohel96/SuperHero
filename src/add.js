import "./App.css";
import React from "react";
import { useState } from "react";

export default function App() {
  const [toDoList, setToDoList] = useState([]);
  const [newTask, setNewTask] = useState("");
  const handleChange = (event) => {
    setNewTask(event.target.value);
  };
  const addTask = () => {
    const newToDoList = [...toDoList, newTask];
    setToDoList(newToDoList);
  };
  const deleteHandler = (taskName) => {
    const newToDoList = toDoList.filter((task) => {
      if (task === taskName) {
        return false;
      } else {
        return true;
      }
    });
    setToDoList(newToDoList);
  };
  return (
    <>
      <div>
        <input onChange={handleChange} type="text" />
        <button onClick={addTask}>addTask</button>
      </div>
      <div className="list">
        {toDoList.map((task) => {
          return (
            <div>
              <h1> {task}</h1>
              <button onClick={() => deleteHandler(task)}>delete</button>
            </div>
          );
        })}
      </div>
    </>
  );
}
