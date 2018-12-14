import React from "react";
import UIField from "../UIComponents/UIField";
import UIRadioBtn from "../UIComponents/UIRadioBtn";

export default class Basic extends React.Component {
  render() {
    const { values, onChange, errors } = this.props;
    return (
      <React.Fragment>
        <UIField
          id="firstname"
          labelText="firstname"
          type="text"
          placeholderText="Enter firstname"
          name="firstname"
          value={values.firstname}
          onChange={onChange}
          error={errors.firstname}
        />
        <UIField
          id="lastname"
          labelText="lastname"
          type="text"
          placeholderText="Enter lastname"
          name="lastname"
          value={values.lastname}
          onChange={onChange}
          error={errors.lastname}
        />
        <UIField
          id="password"
          labelText="Password"
          type="password"
          placeholderText="Enter password"
          name="password"
          value={values.password}
          onChange={onChange}
          error={errors.password}
        />
        <UIField
          id="repeatPassword"
          labelText="Repeat password"
          type="password"
          placeholderText="Repeat password"
          name="repeatPassword"
          value={values.repeatPassword}
          onChange={onChange}
          error={errors.repeatPassword}
        />
        <fieldset className="form-group">
          <div>Gender</div>
          <UIRadioBtn
            type="radio"
            name="gender"
            id="male"
            value="male"
            labelText="Male"
            onChange={onChange}
            checked={values.gender === "male"}
          />
          <UIRadioBtn
            type="radio"
            name="gender"
            id="female"
            value="female"
            labelText="Female"
            checked={values.gender === "female"}
            onChange={onChange}
          />
        </fieldset>
      </React.Fragment>
    );
  }
}
