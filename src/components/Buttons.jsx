import React from "react";
import { inject, observer } from "mobx-react";

@inject(({ formStore }) => ({
  activeStep: formStore.activeStep,
  onChangeStep: formStore.onChangeStep,
  onClearInfo: formStore.onClearInfo
}))
@observer
class ButtonsSteps extends React.Component {
  render() {
    const { activeStep, onChangeStep, onClearInfo } = this.props;
    return (
      <React.Fragment>
        {activeStep !== 4 && (
          <div className="d-flex justify-content-center">
            <button
              type="button"
              disabled={activeStep === 1}
              className="mr-2 ml-2 btn btn-light"
              onClick={onChangeStep("Previous")}
            >
              Previous
            </button>
            <button
              type="button"
              className="mr-2 ml-2 btn btn-light"
              onClick={onChangeStep("Next")}
            >
              Next
            </button>
          </div>
        )}
        {activeStep === 4 && (
          <div className="d-flex justify-content-center">
            <button
              type="button"
              name="Reset"
              className="mr-2 ml-2 btn btn-light"
              onClick={onClearInfo}
            >
              Reset
            </button>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default ButtonsSteps;
