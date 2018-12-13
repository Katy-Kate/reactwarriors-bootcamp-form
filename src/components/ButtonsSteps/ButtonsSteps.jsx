import React from "react";
import Button from "./Button";

export default class ButtonsSteps extends React.Component {
  render() {
    const { activeStep, onChangeStep, clearInfo } = this.props;

    if (activeStep === 1) {
      return (
        <div className="d-flex justify-content-center">
          <span className="mr-2 ml-2 btn btn-light" name="Previous" disabled>
            Previous
          </span>
          <Button name="Next" onChangeStep={onChangeStep} />
        </div>
      );
    } else if (activeStep === 4) {
      return (
        <div className="d-flex justify-content-center">
          <span
            className="mr-2 ml-2 btn btn-light"
            name="reset"
            onClick={clearInfo()}
          >
            reset
          </span>
        </div>
      );
    } else {
      return (
        <div className="d-flex justify-content-center">
          <Button name="Previous" onChangeStep={onChangeStep} />
          <Button name="Next" onChangeStep={onChangeStep} />
        </div>
      );
    }
  }
}
