import React from "react";

export default class Button extends React.Component {
  render() {
    const { name, onChangeStep, clearInfo, disabled } = this.props;
    return (
      <button
        disabled={disabled}
        className="mr-2 ml-2 btn btn-light"
        clearInfo={clearInfo}
        onClick={clearInfo ? clearInfo() : onChangeStep(name)}
      >
        {name}
      </button>
    );
  }
}
