import React from "react";
import Button from "./Button";

export default class ButtonsSteps extends React.Component {
  render() {
    const { activeStep, onChangeStep, clearInfo } = this.props;

    return (
      <div className="d-flex justify-content-center">
        <Button
          name="Previous"
          disabled={activeStep === 1}
          onChangeStep={onChangeStep}
        />
        <Button
          name={activeStep === 4 ? "Reset" : "Next"}
          clearInfo={activeStep === 4 ? clearInfo : false}
          onChangeStep={activeStep !== 4 ? onChangeStep : false}
        />
      </div>
    );
  }
}
