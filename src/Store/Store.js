import { observable, action, computed } from "mobx";
import countries from "../data/countries";
import cities from "../data/cities";

const emptyValues = {
  firstname: "",
  lastname: "",
  password: "",
  repeatPassword: "",
  gender: "male",
  email: "",
  mobile: "",
  country: "1",
  city: "1",
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

  getLocation = () => {
    const { country, name } = cities[this.values.city];
    let countryName;
    countries.map(i => {
      if (i.id === country) {
        countryName = i.name;
      }
    });

    return countryName + " , " + name;
  };

  getClassName = id => {
    const { activeStep } = this;
    if (activeStep === id) {
      return "step is-active";
    } else if (activeStep - id >= 1) {
      return "step is-completed";
    } else {
      return "step";
    }
  };

  validateFields = () => {
    const errors = {};
    const { activeStep, values } = this;
    switch (activeStep) {
      case 1:
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
        return errors;
      case 2:
        const regExpMail = new RegExp("^.+@[^.].*.[a-z]{2,}$");
        const regExpMobile = new RegExp("[0-9]{9,}");
        if (!regExpMail.test(values.email)) {
          errors.email = "Invalid email address";
        }
        if (!regExpMobile.test(values.mobile)) {
          errors.mobile = "Invalid mobile number";
        }
        // if (!values.city) {
        //   errors.city = "Required";
        // }
        return errors;
      case 3:
        if (!values.avatar) {
          errors.avatar = "Required";
        }
        return errors;
      default:
        return errors;
    }
  };

  @computed get getCities() {
    return Object.entries(cities).reduce((acc, currVal) => {
      if (Number(this.values.country) === Number(currVal[1].country)) {
        acc.push({ id: currVal[0], name: currVal[1].name });
      }
      return acc;
    }, []);
  }

  @action
  onChange = event => {
    this.values[event.target.name] = event.target.value;
  };

  @action
  onChangeStep = name => event => {
    event.preventDefault();

    if (name === "Previous" && this.activeStep > 1) {
      this.activeStep = this.activeStep - 1;
    }
    if (name === "Next" && this.activeStep < 4) {
      const errors = this.validateFields();
      if (Object.keys(errors).length > 0) {
        this.errors = errors;
      } else {
        this.activeStep = this.activeStep + 1;
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
