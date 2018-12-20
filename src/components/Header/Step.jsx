import React from "react";
import { inject, observer } from "mobx-react";

@inject(({ formStore }) => ({
  getClassName: formStore.getClassName
}))
@observer
class Step extends React.Component {
  render() {
    const { nameStep, id, getClassName } = this.props;
    return (
      <div className={getClassName(id)}>
        <div className="step__marker">{id}</div>
        <div className="step__title mt-1">{nameStep}</div>
      </div>
    );
  }
}

export default Step;
