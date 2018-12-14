import React from "react";
import cities from "../../data/cities";
import countries from "../../data/countries";

export default class Finish extends React.Component {
  getLocation = cityId => {
    const { country, name } = cities[cityId];
    let countryName;
    countries.map(i => {
      if (i.id === country) {
        countryName = i.name;
      }
    });

    return countryName + " , " + name;
  };

  render() {
    const { values } = this.props;
    const userLocation = this.getLocation(values.city);

    return (
      <div className="user-info">
        <h2>{values.firstname + " " + values.lastname}</h2>
        <img src={values.avatar} alt="avatar" />
        <p>Email: {values.email}</p>
        <p>Mobile: {values.mobile}</p>
        <p>Location: {userLocation}</p>
      </div>
    );
  }
}
