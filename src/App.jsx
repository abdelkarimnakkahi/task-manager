// import "bootstrap-icons/font/bootstrap-icons.css";
import { useState, useEffect } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import ShowTask from "./components/ShowTask";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || [],
  );
  const [currentTask, setCurrentTask] = useState({});

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  return (
    <>
      <AddTask
        tasks={tasks}
        setTasks={setTasks}
        currentTask={currentTask}
        setCurrentTask={setCurrentTask}
      />
      <ShowTask
        tasks={tasks}
        setTasks={setTasks}
        currentTask={currentTask}
        setCurrentTask={setCurrentTask}
      />
      <Footer />
    </>
  );
}

export default App;
