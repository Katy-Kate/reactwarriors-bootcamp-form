import React from "react";
import cities from "../../data/cities";
import countries from "../../data/countries";

export default class FinishInfo extends React.Component {
  getLocation = cityId => {
    const cityInfo = cities[cityId];
    console.log(cityInfo);
    const { country, name } = cityInfo;
    let location;
    let countryName;
    countries.map(i => {
      if (i.id === country) {
        countryName = i.name;
      }
    });

    return (location = countryName + ", " + name);
  };

  render() {
    const { values } = this.props;
    // debugger;
    const userLocation = this.getLocation(values.city);
    console.log("aaa", this.props);

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
