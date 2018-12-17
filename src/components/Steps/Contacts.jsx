import React from "react";
import UIField from "../UIComponents/UIField";
import UISelect from "../UIComponents/UISelect";
import countries from "../../data/countries";
import cities from "../../data/cities";

export default class Contacts extends React.Component {
  getCities = countryId => {
    return Object.entries(cities).reduce((acc, currVal) => {
      if (Number(countryId) === Number(currVal[1].country)) {
        acc.push({ id: currVal[0], name: currVal[1].name });
      }
      return acc;
    }, []);
  };
  render() {
    const { values, onChange, errors } = this.props;
    const cities = this.getCities(values.country);
    return (
      <div>
        <UIField
          id="email"
          labelText="email"
          type="text"
          placeholderText="Enter email"
          name="email"
          value={values.email}
          onChange={onChange}
          error={errors.email}
        />
        <UIField
          id="mobile"
          labelText="mobile"
          type="tel"
          placeholderText="Enter mobile"
          name="mobile"
          value={values.mobile}
          onChange={onChange}
          error={errors.mobile}
        />
        <UISelect
          options={countries}
          onChange={onChange}
          title="Country"
          name="country"
        />
        <UISelect
          options={cities}
          onChange={onChange}
          title="City"
          name="city"
          error={errors.city}
        />
      </div>
    );
  }
}
