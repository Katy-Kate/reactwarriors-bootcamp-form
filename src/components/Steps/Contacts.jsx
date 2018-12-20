import React from "react";
import UIField from "../UIComponents/UIField";
import UISelect from "../UIComponents/UISelect";
import countries from "../../data/countries";
import { observer, inject } from "mobx-react";

@inject(({ formStore }) => ({
  values: formStore.values,
  onChange: formStore.onChange,
  getCities: formStore.getCities,
  errors: formStore.errors
}))
@observer
class Contacts extends React.Component {
  render() {
    const { values, onChange, errors, getCities } = this.props;
    return (
      <React.Fragment>
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
          options={getCities}
          onChange={onChange}
          title="City"
          name="city"
          error={errors.city}
        />
      </React.Fragment>
    );
  }
}
export default Contacts;
