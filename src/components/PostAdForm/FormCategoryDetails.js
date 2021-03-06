import React, { useEffect, useState } from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import Button from "@material-ui/core/Button";

export default function FormCategoryDetails(props) {
  const { values, handleChange } = props;
  const [error, setError] = useState(null);

  const errorDiv = error ? (
    <div className="error">
      <i class="material-icons error-icon">error_outline</i>
      {error}
    </div>
  ) : (
    ""
  );

  useEffect(() => setError(null), []);

  function cont(e) {
    e.preventDefault();

    if (!values.category) {
      setError("Choose a category");
      return;
    }
    props.nextStep();
  }

  function back() {
    props.prevStep();
  }

  return (
    <>
      <div className="FormCategoryDetails">
        <h2>Choose the category</h2>
        {errorDiv}
        <RadioGroup
          required
          error={error}
          aria-label="ad-topic"
          name="category"
          onChange={handleChange("category")}
        >
          <FormControlLabel
            value="community"
            control={<Radio />}
            label="Community"
          />
          <FormControlLabel
            value="services"
            control={<Radio />}
            label="Services"
          />
          <FormControlLabel value="events" control={<Radio />} label="Events" />
          <FormControlLabel
            value="for-sale"
            control={<Radio />}
            label="For sale"
          />
          <FormControlLabel
            value="housing"
            control={<Radio />}
            label="Housing"
          />
          <FormControlLabel value="jobs" control={<Radio />} label="Jobs" />
        </RadioGroup>

        <br />
        <Button
          label="Continue"
          primary={true}
          style={styles.button}
          onClick={cont}
        />
        <Button
          label="Back"
          primary={false}
          style={styles.button}
          onClick={back}
        />
      </div>
    </>
  );
}

const styles = {
  button: {
    margin: 15
  }
};
