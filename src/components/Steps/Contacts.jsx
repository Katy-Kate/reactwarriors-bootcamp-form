import React from "react";
import UIField from "../UIComponents/UIField";
import CountryOptions from "../Form/CountryOptions";
import countries from "../../data/countries";
import CitiesOptions from "../Form/CitiesOptions";
import cities from "../../data/cities";

export default class Contacts extends React.Component {
  getCities = countryId => {
    const aciveCities = [];
    for (let key in cities) {
      if (Number(countryId) === cities[key].country) {
        aciveCities.push({
          cityId: key,
          nameCity: cities[key].name
        });
      }
    }
    return aciveCities;
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
        <CountryOptions countries={countries} onChange={onChange} />
        <CitiesOptions
          cities={cities}
          onChange={onChange}
          values={values}
          error={errors.city}
        />
      </div>
    );
  }
}
