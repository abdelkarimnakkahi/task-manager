// import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";
import "./App.css";
import AddTask from "./assets/components/AddTask";
import Footer from "./assets/components/Footer";
import ShowTask from "./assets/components/ShowTask";

function App() {
  const [tasks, setTasks] = useState([]);
  return (
    <>
      <AddTask tasks={tasks} setTasks={setTasks} />
      <ShowTask tasks={tasks} setTasks={setTasks} />
      <Footer />
    </>
  );
}

export default App;
