import "./ShowTask.css";
import { PencilSquare, TrashFill } from "react-bootstrap-icons";
function ShowTask({ tasks, setTasks, currentTask, setCurrentTask }) {
  const handleClear = () => {
    setTasks([]);
  };

  const handleDelete = (id) => {
    // console.log("-------");
    // console.log(id);

    setTasks(
      tasks.filter((task) => {
        return task.id !== id;
      }),
    );
    // Another way
    //     const handleDelete = (id) => {
    //   setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    // };
  };

  const handleEdit = (id) => {
    const taskEdit = tasks.find((task) => {
      return task.id === id;
    });

    setCurrentTask(taskEdit);
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
                    <PencilSquare
                      className="edit-task"
                      onClick={() => {
                        handleEdit(task.id);
                      }}
                    />
                    <TrashFill
                      className="delete-task"
                      onClick={() => {
                        handleDelete(task.id);
                      }}
                    />
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
