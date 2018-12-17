import React from "react";

export default class ButtonsSteps extends React.Component {
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
              onClick={activeStep !== 1 ? onChangeStep("Previous") : undefined}
            >
              Previous
            </button>
            <button
              type="button"
              className="mr-2 ml-2 btn btn-light"
              onClick={activeStep !== 4 ? onChangeStep("Next") : undefined}
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
