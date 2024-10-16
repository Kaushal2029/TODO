import React, { useEffect, useState } from "react";
import "./Home.css";
import { useLocation, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log("location", location.state);
  // Initialize task as an empty array
  const [tasks, setTasks] = useState([]);

  // useEffect(() => {
  //   if (location.state && location.state.newTask) {
  //     // Ensure the previous state is an array and append the new task
  //     setTasks((prevTasks) => [...prevTasks, location.state.newTask]);
  //   }
  //   console.log(location.state);
  // }, [location.state]);

  useEffect(() => {
    if (location.state) {
      setTasks(location.state);
    }
  }, [location]);

  const handleRoute = () => {
    navigate("/task-add", { state: tasks });
  };

  const handleDelete = (index) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

  return (
    <div className="hcontainer">
      <div className="hheader">
        <h1>Task Tracker</h1>
        <button onClick={handleRoute}>Add</button>
      </div>
      
        {tasks.map((task, index) => (
          <div
            className={`htask-dis ${task.isReminder ? "reminder-active" : ""}`}
            key={task.task}
          >
            <div className="htask1">{task.task}</div>

            <div className="htask2">{task.dateAndTime}</div>
            <div className="htask3" onClick={() => handleDelete(index)}>
              <i className="fa-solid fa-xmark"></i>
            </div>
          </div>
        ))}
      </div>
   
  );
};

export default Home;
