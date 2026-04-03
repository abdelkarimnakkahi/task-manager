// import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import ShowTask from "./components/ShowTask";

function App() {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState({});
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
