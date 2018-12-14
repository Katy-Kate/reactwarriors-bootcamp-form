import React from "react";

export default class CitiesOptions extends React.Component {
  render() {
    const { cities, onChange, values, error } = this.props;
    return (
      <div className="form-group">
        <label htmlFor="country">City</label>
        <select
          className="form-control"
          id="city"
          name="city"
          onChange={onChange}
          value={values.city}
        >
          <option value="">Select city</option>
          {cities.map(key => {
            const { cityId, nameCity } = key;
            return (
              <option key={cityId} value={cityId} name={nameCity}>
                {nameCity}
              </option>
            );
          })}
        </select>
        {error ? <div className="invalid-feedback">{error}</div> : null}
      </div>
    );
  }
}
