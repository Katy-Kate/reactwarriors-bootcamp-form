import React from "react";
import { observer } from "mobx-react";

const UIField = props => {
  return (
    <div className="form-group">
      <label htmlFor={props.id}>{props.labelText}</label>
      <input
        type={props.type}
        className="form-control"
        id={props.id}
        placeholder={props.placeholderText}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      />
      {props.error ? (
        <div className="invalid-feedback">{props.error}</div>
      ) : null}
    </div>
  );
};
export default observer(UIField);
