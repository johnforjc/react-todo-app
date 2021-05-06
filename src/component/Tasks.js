import Task from "./Task";

const Tasks = ({ tasks, onDeleteTask, addReminder }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDeleteTask={onDeleteTask} addReminder={addReminder}></Task>
      ))}
    </>
  );
};

export default Tasks;
