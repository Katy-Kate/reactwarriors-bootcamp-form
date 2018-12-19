import React from "react";
import Avatar from "./Steps/Avatar";
import Contacts from "./Steps/Contacts";
import Basic from "./Steps/Basic";
import Buttons from "./Buttons";
import Finish from "./Steps/Finish";
import Steps from "./Header/Steps";

import { observer, inject } from "mobx-react";

@inject(({ formStore }) => {
  console.log("Store", formStore.values.firstname);
  return { values: formStore.values, onChange: formStore.onChange };
})
@observer
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      errors: {
        firstname: false,
        lastname: false,
        password: false,
        repeatPassword: false,
        email: false,
        mobile: false,
        city: false
      },
      activeStep: 1
    };
  }

  validateFields = () => {
    const errors = {};
    const { activeStep, values } = this.state;
    if (activeStep === 1) {
      if (values.firstname.length < 5) {
        errors.firstname = "Must be more then 4 charecters";
      }
      if (values.lastname.length < 5) {
        errors.lastname = "Must be more then 4 charecters";
      }
      if (values.password.length < 6) {
        errors.password = "Must be more then 5 charecters";
      }
      if (
        values.repeatPassword !== values.password ||
        values.password.length === 0
      ) {
        errors.repeatPassword = "Password must be the same";
      }
    }
    if (activeStep === 2) {
      const regExpMail = new RegExp("^.+@[^.].*.[a-z]{2,}$");
      const regExpMobile = new RegExp("[0-9]{9,}");
      if (!regExpMail.test(values.email)) {
        errors.email = "Invalid email address";
      }
      if (!regExpMobile.test(values.mobile)) {
        errors.mobile = "Invalid mobile number";
      }
      if (!values.city) {
        errors.city = "Required";
      }
    }
    if (activeStep === 3) {
      if (!values.avatar) {
        errors.avatar = "Required";
      }
    }
    return errors;
  };
  onChangeStep = name => event => {
    event.preventDefault();
    const { activeStep } = this.state;
    if (name === "Previous" && activeStep > 1) {
      this.setState({ activeStep: activeStep - 1 });
    }
    if (name === "Next" && activeStep < 4) {
      const errors = this.validateFields();

      if (Object.keys(errors).length > 0) {
        this.setState({ errors });
      } else {
        this.setState({
          activeStep: activeStep + 1,
          errors: {}
        });
      }
    }
  };
  onChangeAvatar = event => {
    const avatar = event.target.files[0];
    const reader = new FileReader();
    reader.onload = event => {
      this.setState(prevState => ({
        values: { ...prevState.values, avatar: event.target.result }
      }));
    };

    reader.readAsDataURL(avatar);
  };
  onClearInfo = () => {
    this.setState({
      values: { gender: "male" },
      activeStep: 1
    });
  };
  render() {
    const { activeStep, errors } = this.state;
    const { values, onChange } = this.props;
    return (
      <div className="form-container card">
        <form className="form card-body">
          <Steps activeStep={activeStep} />
          {activeStep === 1 ? (
            <Basic errors={errors} onChange={onChange} values={values} />
          ) : null}
          {activeStep === 2 ? (
            <Contacts errors={errors} onChange={onChange} values={values} />
          ) : null}
          {activeStep === 3 ? (
            <Avatar
              error={errors.avatar}
              onChangeAvatar={this.onChangeAvatar}
              img={values.avatar}
            />
          ) : null}
          {activeStep === 4 ? <Finish values={values} /> : null}

          <Buttons
            onChangeStep={this.onChangeStep}
            activeStep={activeStep}
            onClearInfo={this.onClearInfo}
          />
        </form>
      </div>
    );
  }
}

export default App;
