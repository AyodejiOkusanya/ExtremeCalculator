import PropTypes from "prop-types";
import { Button } from "./Button";
import "./ButtonsPanel.css";

export const ButtonsPanel = ({ rows, handleButtonClick }) => {
  return (
    <div className="buttonsPanel">
      {rows.map((row) => (
        <Button {...row} key={row.name} onClick={handleButtonClick} />
      ))}
    </div>
  );
};

ButtonsPanel.prototype = {
  rows: PropTypes.arrayOf(PropTypes.object),
  handleButtonClick: PropTypes.func,
};
