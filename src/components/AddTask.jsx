import { useState } from "react";
import "./AddTask.css";

function AddTask({ tasks, setTasks, currentTask, setCurrentTask }) {
  const [taskError, setTaskError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTaskError("");
    let name = e.target.task.value;
    if (!name.trim()) {
      setTaskError("The field is required");
      return;
    }

    // Check if the user updates the task
    if (currentTask.id) {
      const updatedDate =
        new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString();
      const updatedTaskList = tasks.map((tasksItem) => {
        return tasksItem.id === currentTask.id
          ? {
              id: currentTask.id,
              name: currentTask.name,
              createdAt: updatedDate,
            }
          : tasksItem;
      });
      setTasks(updatedTaskList);
      setCurrentTask({});
    } else {
      const date = new Date();
      const createdAt =
        date.toLocaleDateString() + " " + date.toLocaleTimeString();
      const newTask = {
        id: Math.floor(Math.random() * 10000) + 1,
        name: name,
        createdAt: createdAt,
      };

      setTasks([...tasks, newTask]);
      setCurrentTask({});
    }
  };

  const handleChange = (e) => {
    setCurrentTask({ ...currentTask, name: e.target.value });
  };

  return (
    <section className="add-task">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              id="task"
              name="task"
              placeholder="Enter a task"
              value={currentTask.name || ""}
              onChange={handleChange}
            />
            {taskError && <p className="task-error">{taskError}</p>}
          </div>
          <button type="submit" className="btn-add">
            +
          </button>
        </form>
      </div>
    </section>
  );
}

export default AddTask;
