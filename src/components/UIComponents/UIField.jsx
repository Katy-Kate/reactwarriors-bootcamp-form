import React from "react";

export default class UIField extends React.PureComponent {
  render() {
    const {
      id,
      labelText,
      name,
      placeholderText,
      type,
      onChange,
      value,
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
