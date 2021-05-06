import { useState } from "react";

const Form = ({ addTask }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    addTask({ text, day, reminder });

    // reset form
    setText("");
    setDay("");
    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="text">Name of Task</label>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      </div>
      <div className="form-control">
        <label htmlFor="day">Date of Task</label>
        <input type="text" value={day} onChange={(e) => setDay(e.target.value)} />
      </div>
      <div className="form-control-check">
        <label htmlFor="reminder">Set Reminder</label>
        <input type="checkbox" checked={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
      </div>
      <input type="submit" value="Submit" className="btn btn-block" />
    </form>
  );
};

export default Form;
