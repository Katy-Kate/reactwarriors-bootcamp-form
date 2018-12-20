import React from "react";
import classNames from "classnames";
import { inject, observer } from "mobx-react";

@inject(({ formStore }) => ({
  activeStep: formStore.activeStep
}))
@observer
class Step extends React.Component {
  render() {
    const { nameStep, id, activeStep } = this.props;
    return (
      <div
        className={classNames({
          [`step`]: true,
          [`is-active`]: activeStep === id,
          [`is-completed`]: activeStep - id >= 1
        })}
      >
        <div className="step__marker">{id}</div>
        <div className="step__title mt-1">{nameStep}</div>
      </div>
    );
  }
}

export default Step;
