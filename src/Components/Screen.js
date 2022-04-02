import { Component } from "react";
import "./Screen.css";
import PropsTypes from "prop-types";

export class Screen extends Component {
  static propTypes = {
    screenValue: PropsTypes.string,
  };
  render() {
    return <div className="screen">{this.props.screenValue}</div>;
  }
}
