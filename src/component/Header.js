import propTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, toogleButton, showAddTask }) => {
  return (
    <header className="header">
      <h1>{title}</h1>

      <Button btnText={`${showAddTask ? "Add" : "Close"}`} color={`${showAddTask ? "green" : "red"}`} onClick={() => toogleButton()} />

      {/* Inline CSS JSX
            <h1 style={{color : 'red'}}>{title}</h1> */}

      {/* CSS in JS
            <h1 style={headingStyle}>Task Tracker</h1> */}
    </header>
  );
};

// Default props
Header.defaultProps = {
  title: "Task Tracker",
};

// PropTypes
Header.propTypes = {
  title: propTypes.string.isRequired,
};

// CSS in JSX
// const headingStyle =
// {
//     color : 'blue'
// }

export default Header;
