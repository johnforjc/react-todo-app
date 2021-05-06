import { useState } from "react";
import Form from "./component/Form";
import Header from "./component/Header";
import Tasks from "./component/Tasks";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at 1:30pm",
      reminder: true,
    },
  ]);

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 100000) + 1;
    const newTask = { id, ...task };
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
