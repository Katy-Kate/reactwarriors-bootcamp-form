import React from "react";

export default class Button extends React.Component {
  render() {
    const { name, onChangeStep } = this.props;
    return (
      <span className="mr-2 ml-2 btn btn-light" onClick={onChangeStep(name)}>
        {name}
      </span>
    );
  }
}
