import { Component } from "react";
import "./Button.css";
import PropTypes from "prop-types";

export class Button extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  classNames = ["calcButton", this.props.colour, this.props.size];

  handleClick() {
    this.props.onClick({ isNum: this.props.isNum, name: this.props.name });
  }

  render() {
    return (
      <button
        className={this.classNames.join(" ")}
        onClick={this.handleClick}
        value={this.props.name}
      >
        {this.props.name}
      </button>
    );
  }
}

Button.propTypes = {
  name: PropTypes.string,
  colour: PropTypes.oneOf(["orange", "grey"]),
  size: PropTypes.oneOf(["mid", "large"]),
  onClick: PropTypes.func,
  isNum: PropTypes.bool,
};
