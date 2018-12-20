import React from "react";
import { observer } from "mobx-react";

@observer
class UIField extends React.Component {
  render() {
    const {
      id,
      labelText,
      type,
      placeholderText,
      name,
      value,
      onChange,
      error
    } = this.props;

    return (
      <div className="form-group">
        <label htmlFor={id}>{labelText}</label>
        <input
          type={type}
          className="form-control"
          id={id}
          placeholder={placeholderText}
          name={name}
          value={value}
          onChange={onChange}
        />
        {error ? <div className="invalid-feedback">{error}</div> : null}
      </div>
    );
  }
}
export default UIField;
