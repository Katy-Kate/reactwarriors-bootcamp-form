import React from "react";
import { observer, inject } from "mobx-react";

@inject(({ formStore }) => ({
  values: formStore.values,
  getLocation: formStore.getLocation
}))
@observer
class Finish extends React.Component {
  render() {
    const { values, getLocation } = this.props;
    return (
      <div className="user-info">
        <h2>{values.firstname + " " + values.lastname}</h2>
        <img src={values.avatar} alt="avatar" />
        <p>Email: {values.email}</p>
        <p>Mobile: {values.mobile}</p>
        <p>Location: {getLocation()}</p>
      </div>
    );
  }
}
export default Finish;
