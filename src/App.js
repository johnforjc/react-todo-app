import { useEffect, useState } from "react";
import Form from "./component/Form";
import Header from "./component/Header";
import Tasks from "./component/Tasks";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchLocalStorage();
  }, []);

  useEffect(() => {
    const data = JSON.stringify(tasks);
    localStorage.setItem("myTasks", data);
  }, [tasks]);

  const fetchLocalStorage = () => {
    const data = localStorage.getItem("myTasks");
    setTasks(JSON.parse(data));
  };

  const addTask = (task) => {
    const newId = Math.floor(Math.random() * 100000) + 1;
    const newTask = { id: newId, ...task };
    setTasks([...tasks, newTask]);
  };

  const onDeleteTask = (id) => {
    console.log("deleted", id);
    setTasks(tasks.filter((task) => task.id != id));
  };

  const addReminder = (id) => {
    console.log("reminder", id);
    setTasks(tasks.map((task) => (task.id == id ? { ...task, reminder: !task.reminder } : task)));
  };

  const toogleButton = () => {
    setShowAddTask(!showAddTask);
  };

  return (
    <div className="container">
      <Header title="Task Tracker" toogleButton={toogleButton} showAddTask={showAddTask}></Header>
      {showAddTask && <Form addTask={addTask}></Form>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDeleteTask={onDeleteTask} addReminder={addReminder}></Tasks> : "No task to show"}
    </div>
  );
}

export default App;
