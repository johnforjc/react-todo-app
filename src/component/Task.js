import { FaTimes, FaBell, FaBellSlash } from "react-icons/fa";

// onClick={() => addReminder(task.id)}

const Task = ({ task, onDeleteTask, addReminder }) => {
  return (
    <div className={`task ${task.reminder ? "reminder" : ""}`}>
      <h3>
        {task.text}{" "}
        <div className="iconAction">
          {task.reminder ? (
            <FaBell
              style={{
                color: "blue",
                cursor: "pointer",
                marginRight: "10px",
              }}
              onClick={() => addReminder(task.id)}
            ></FaBell>
          ) : (
            <FaBellSlash
              style={{
                color: "blue",
                cursor: "pointer",
                marginRight: "10px",
              }}
              onClick={() => addReminder(task.id)}
            ></FaBellSlash>
          )}
          <FaTimes
            style={{
              color: "red",
              cursor: "pointer",
            }}
            onClick={() => onDeleteTask(task.id)}
          ></FaTimes>
        </div>
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
