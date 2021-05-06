import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDeleteTask, addReminder }) => {
  return (
    <div className={`task ${task.reminder ? "reminder" : ""}`} onClick={() => addReminder(task.id)}>
      <h3>
        {task.text}{" "}
        <FaTimes
          style={{
            color: "red",
            cursor: "pointer",
          }}
          onClick={() => onDeleteTask(task.id)}
        ></FaTimes>
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
