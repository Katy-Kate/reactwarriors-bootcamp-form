import React from "react";
import UIField from "../UIComponents/UIField";
import UIRadioBtn from "../UIComponents/UIRadioBtn";
import { observer } from "mobx-react";

const Basic = props => {
  return (
    <React.Fragment>
      <UIField
        id="firstname"
        labelText="firstname"
        type="text"
        placeholderText="Enter firstname"
        name="firstname"
        value={props.values.firstname}
        onChange={props.onChange}
        error={props.errors.firstname}
      />
      <UIField
        id="lastname"
        labelText="lastname"
        type="text"
        placeholderText="Enter lastname"
        name="lastname"
        value={props.values.lastname}
        onChange={props.onChange}
        error={props.errors.lastname}
      />
      <UIField
        id="password"
        labelText="Password"
        type="password"
        placeholderText="Enter password"
        name="password"
        value={props.values.password}
        onChange={props.onChange}
        error={props.errors.password}
      />
      <UIField
        id="repeatPassword"
        labelText="Repeat password"
        type="password"
        placeholderText="Repeat password"
        name="repeatPassword"
        value={props.values.repeatPassword}
        onChange={props.onChange}
        error={props.errors.repeatPassword}
      />
      <fieldset className="form-group">
        <div>Gender</div>
        <UIRadioBtn
          type="radio"
          name="gender"
          id="male"
          value="male"
          labelText="Male"
          onChange={props.onChange}
          checked={props.values.gender === "male"}
        />
        <UIRadioBtn
          type="radio"
          name="gender"
          id="female"
          value="female"
          labelText="Female"
          checked={props.values.gender === "female"}
          onChange={props.onChange}
        />
      </fieldset>
    </React.Fragment>
  );
};
export default observer(Basic);
