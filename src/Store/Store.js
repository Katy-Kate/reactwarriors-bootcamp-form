import { observable, action } from "mobx";
class Store {
  @observable
  values = {
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
  @action
  onChange = event => {
    console.log("event", event);
    this.values[event.target.name] = event.target.value;
  };
}

export default Store;
