import React, { useState } from "react";
import "./taskadd.css";
import { useNavigate } from "react-router-dom";

function TaskTracker() {
  const navigate = useNavigate();
  const [taskDetails, setTaskDetails] = useState([]);

  const [task, setTask] = useState("");
  const [dateAndTime, setDateAndTime] = useState("");
  const [isReminder, setIsReminder] = useState(false);

  const handleChange = (e) => {
    const value = e.target.checked;
    setIsReminder(value);
    console.log("value", value);
  };

  const handleSaveTask = () => {
    if (!task || !dateAndTime) {
      alert("Task and Day & Time are required fields.");
      return;
    }

    setTaskDetails([
      ...taskDetails,
      {
        task,
        dateAndTime,
        isReminder,
      },
    ]);

    setDateAndTime("");
    setTask("");
    setIsReminder(false);
  };

  console.log("taskDetails", taskDetails);
  const handleDeleteClick = (taskName) => {
    setTaskDetails(taskDetails.filter((task) => task.task !== taskName));
  };
  return (
    <div className="container">
      <div className="header">
        <h1>Task Tracker</h1>
        <button onClick={() => navigate("/", { state: taskDetails })}>
          Close
        </button>
      </div>

      <div className="form">
        <label htmlFor="task">Task:</label>
        <input
          onChange={(e) => setTask(e.target.value)}
          value={task}
          type="text"
          id="task"
          required
        />

        <label htmlFor="dayTime">Day & Time:</label>
        <input
          onChange={(e) => setDateAndTime(e.target.value)}
          value={dateAndTime}
          type="text"
          id="dayTime"
          required
        />

        <label htmlFor="reminder">
          Set Reminder:
          <input
            type="checkbox"
            id="reminder"
            checked={isReminder}
            onChange={handleChange}
          />
        </label>

        <button onClick={handleSaveTask}>Save Task</button>
      </div>

      {taskDetails.length > 0 ? (
        taskDetails.map((task) => {
          return (
            <div
              className={`task-dis ${task.isReminder ? "reminder-active" : ""}`}
              key={task.task}
            >
              <div className="task1">{task.task}</div>

              <div className="task2">{task.dateAndTime}</div>
              <div
                className="task3"
                onClick={() => handleDeleteClick(task.task)}
              >
                <i className="fa-solid fa-xmark"></i>
              </div>
            </div>
          );
        })
      ) : (
        <div>No data found</div>
      )}
      <div></div>
    </div>
  );
}

export default TaskTracker;