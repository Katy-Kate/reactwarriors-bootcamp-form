import React from "react";
import AvatarInfo from "./Form/AvatarInfo";
import ContactsInfo from "./Form/ContactsInfo";
import BasicInfo from "./Form/BasicInfo";
import ButtonsSteps from "./ButtonsSteps/ButtonsSteps";
import FinishInfo from "./Form/FinishInfo";
import Steps from "./ButtonsSteps/Steps";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      values: {
        firstname: "",
        lastname: "",
        password: "",
        repeatPassword: "",
        gender: "male",
        email: "",
        mobile: "",
        country: 1,
        city: "2",
        avatar: ""
      },
      errors: {
        firstname: false,
        lastname: false,
        password: false,
        repeatPassword: false,
        gender: "male",
        email: false,
        mobile: false,
        city: false
      },
      activeStep: 4
    };
  }

  onChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevState => ({
      values: { ...prevState.values, [name]: value }
    }));
  };
  validateFields = () => {
    const errors = {};
    if (this.state.activeStep === 1) {
      if (this.state.values.firstname.length < 5) {
        errors.firstname = "Must be more then 4 charecters";
      }
      if (this.state.values.lastname.length < 5) {
        errors.lastname = "Must be more then 4 charecters";
      }
      if (this.state.values.password.length < 6) {
        errors.password = "Must be more then 5 charecters";
      }
      if (
        this.state.values.repeatPassword !== this.state.values.password ||
        this.state.values.password.length === 0
      ) {
        errors.repeatPassword = "Password must be the same";
      }
    } else if (this.state.activeStep === 2) {
      const regExpMail = new RegExp("^.+@[^.].*.[a-z]{2,}$");
      const regExpMobile = new RegExp("[0-9]{9,}");
      if (!regExpMail.test(this.state.values.email)) {
        errors.email = "Invalid email address";
      }
      if (!regExpMobile.test(this.state.values.mobile)) {
        console.log("Daaa");
        errors.mobile = "Invalid mobile number";
      }
      if (!this.state.values.city) {
        errors.city = "Required";
      }
    } else if (this.state.activeStep === 3) {
      if (!this.state.values.avatar) {
        errors.avatar = "Required";
      }
    }
    return errors;
  };
  onChangeStep = event => a => {
    a.preventDefault();
    const { activeStep } = this.state;
    const errors = this.validateFields();

    if (Object.keys(errors).length > 0) {
      this.setState({ errors });
    } else {
      this.setState({
        errors: {}
      });
      if (event === "Previous" && activeStep > 1) {
        this.setState({ activeStep: activeStep - 1 });
      } else if (event === "Next" && activeStep < 4) {
        this.setState({ activeStep: activeStep + 1 });
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

    console.log("ava", event.target);
  };
  clearInfo = event => () => {
    this.setState({
      values: {},
      activeStep: 1
    });
  };
  render() {
    const {
      activeStep,
      values,
      errors,
      isDisablePrevBtn,
      isDisableNextBtn
    } = this.state;
    return (
      <div className="form-container card">
        <form className="form card-body">
          <Steps activeStep={activeStep} />
          {activeStep === 1 ? (
            <BasicInfo
              errors={errors}
              onChange={this.onChange}
              values={values}
            />
          ) : null}
          {activeStep === 2 ? (
            <ContactsInfo
              errors={errors}
              onChange={this.onChange}
              values={values}
            />
          ) : null}
          {activeStep === 3 ? (
            <AvatarInfo
              error={errors.avatar}
              onChangeAvatar={this.onChangeAvatar}
              img={values.avatar}
            />
          ) : null}
          {activeStep === 4 ? <FinishInfo values={values} /> : null}

          <ButtonsSteps
            onChangeStep={this.onChangeStep}
            activeStep={activeStep}
            clearInfo={this.clearInfo}
          />
        </form>
      </div>
    );
  }
}
