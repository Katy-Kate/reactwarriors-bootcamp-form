import React from "react";
import Field from "./Field";
import SelectedField from "./SelectedField";
import countries from "../../data/countries";
import ActiveCities from "./ActiveCities";
import cities from "../../data/cities";

export default class ContactsInfo extends React.Component {
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
        <Field
          id="email"
          labelText="email"
          type="text"
          placeholderText="Enter email"
          name="email"
          value={values.email}
          onChange={onChange}
          error={errors.email}
        />
        <Field
          id="mobile"
          labelText="mobile"
          type="tel"
          placeholderText="Enter mobile"
          name="mobile"
          value={values.mobile}
          onChange={onChange}
          error={errors.mobile}
        />
        <SelectedField array={countries} onChange={onChange} />
        <ActiveCities
          cities={cities}
          onChange={onChange}
          values={values}
          error={errors.city}
        />
      </div>
    );
  }
}
