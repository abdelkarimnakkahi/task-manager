import { useState } from "react";
import "./AddTask.css";

function AddTask({ tasks, setTasks }) {
  const [taskError, setTaskError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTaskError("");
    let name = e.target.task.value;
    if (!name.trim()) {
      setTaskError("The field is required");
      return;
    }

    const date = new Date();
    const createdAt =
      date.toLocaleDateString() + " " + date.toLocaleTimeString();
    const newTask = {
      id: Math.floor(Math.random() * 10000) + 1,
      name: name,
      createdAt: createdAt,
    };
    setTasks([...tasks, newTask]);
    e.target.task.value = "";
    console.log(tasks);
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
