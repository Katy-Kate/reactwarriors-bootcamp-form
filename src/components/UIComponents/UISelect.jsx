import React from "react";
import { observer } from "mobx-react";

@observer
class UISelect extends React.Component {
  render() {
    const { options, onChange, title, name } = this.props;
    return (
      <div className="form-group">
        <label htmlFor="country">{title}</label>
        <select
          className="form-control"
          id={name}
          name={name}
          onChange={onChange}
        >
          {options.map(item => {
            return (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}
export default UISelect;
