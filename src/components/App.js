import React from "react";
import Avatar from "./Steps/Avatar";
import Contacts from "./Steps/Contacts";
import Basic from "./Steps/Basic";
import Buttons from "./Buttons";
import Finish from "./Steps/Finish";
import Steps from "./Header/Steps";
import { observer, inject } from "mobx-react";

@inject(({ formStore }) => ({
  activeStep: formStore.activeStep,
  onChangeStep: formStore.onChangeStep,
  onClearInfo: formStore.onClearInfo
}))
@observer
class App extends React.Component {
  render() {
    const { activeStep } = this.props;
    return (
      <div className="form-container card">
        <form className="form card-body">
          <Steps activeStep={activeStep} />
          {activeStep === 1 ? <Basic /> : null}
          {activeStep === 2 ? <Contacts /> : null}
          {activeStep === 3 ? <Avatar /> : null}
          {activeStep === 4 ? <Finish /> : null}

          <Buttons />
        </form>
      </div>
    );
  }
}

export default App;
