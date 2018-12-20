import React from "react";
import { observer } from "mobx-react";

const UIRadioBtn = props => {
  return (
    <div className="form-check">
      <input
        type={props.type}
        className="form-check-input"
        id={props.id}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        checked={props.checked}
      />
      <label htmlFor={props.id} className="form-check-label">
        {props.labelText}
      </label>
      {props.error ? (
        <div className="invalid-feedback">{props.error}</div>
      ) : null}
    </div>
  );
};
export default observer(UIRadioBtn);
