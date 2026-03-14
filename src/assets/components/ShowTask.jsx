import { useState } from "react";
import "./ShowTask.css";
import { PencilSquare, TrashFill } from "react-bootstrap-icons";
function ShowTask({ tasks, setTasks }) {
  const handleClear = () => {
    setTasks([]);
  };

  return (
    <section className="show-task">
      <div className="container">
        <div className="task-header">
          <div>
            <h3>Todo</h3>
            <span className="counter">{tasks.length}</span>
          </div>
          <button className="btn-clear" onClick={handleClear}>
            Clear All
          </button>
        </div>
        <div className="task-main">
          <ul>
            {tasks.length === 0 && (
              <p className="message">
                There's no task, Click the + button to add one
              </p>
            )}
            {tasks.map((task) => {
              return (
                <li key={task.id}>
                  <div>
                    <p className="task-title">{task.name}</p>
                    <p className="task-date">{task.createdAt}</p>
                  </div>
                  <div>
                    <PencilSquare className="delete-task" />
                    <TrashFill className="edit-task" />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ShowTask;
