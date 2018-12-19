import { observable, action, computed } from "mobx";
import cities from "../data/cities";
import countries from "../data/countries";
const emptyValues = {
  firstname: "",
  lastname: "",
  password: "",
  repeatPassword: "",
  gender: "male",
  email: "",
  mobile: "",
  country: 1,
  city: "",
  avatar: ""
};
const emptyErrors = {
  firstname: false,
  lastname: false,
  password: false,
  repeatPassword: false,
  email: false,
  mobile: false,
  city: false
};
class Store {
  @observable
  values = emptyValues;

  @observable
  errors = emptyErrors;

  @observable
  activeStep = 1;

  @computed get getLocation() {
    return this.values.country + " , " + this.values.city;
  }

  @action
  onChange = event => {
    this.values[event.target.name] = event.target.value;
  };
  @action
  validateFields = () => {
    const errors = {};
    const { activeStep, values } = this;
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
  @action
  onChangeStep = name => event => {
    event.preventDefault();
    const { activeStep } = this;
    if (name === "Previous" && activeStep > 1) {
      this.activeStep--;
    }
    if (name === "Next" && activeStep < 4) {
      const errors = this.validateFields();

      if (Object.keys(errors).length > 0) {
        this.errors = errors;
      } else {
        this.activeStep++;
        this.errors = emptyErrors;
      }
    }
  };
  @action
  onChangeAvatar = event => {
    const avatar = event.target.files[0];
    const reader = new FileReader();
    reader.onload = event => {
      this.values.avatar = event.target.result;
    };
    reader.readAsDataURL(avatar);
  };
  @action
  onClearInfo = () => {
    this.activeStep = 1;
    this.values = emptyValues;
  };
}

export default Store;
