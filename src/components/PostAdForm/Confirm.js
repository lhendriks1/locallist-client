import React from "react";
// import { List, ListItem } from 'material-ui/List';
import Button from "@material-ui/core/Button";
import { StylesProvider } from "@material-ui/core";

export default function Confirm(props) {
  function cont(e) {
    e.preventDefault();
    console.log(e.target.value);
    //PROCESS FORM HERE//
    props.nextStep();
  }

  function back() {
    props.prevStep();
  }

  const {
    values: {
      firstName,
      lastName,
      email,
      zipCode,
      title,
      description,
      price,
      category,
      topic
    }
  } = props;

  return (
    <>
      <div className="Confirmation">
        <h2>Confirm Ad Information</h2>
        <ul class="confirmation-list">
          <li>
            Name: {firstName} {lastName}
          </li>
          <li>Email: {email}</li>
          <li>Zip Code: {zipCode}</li>
          <li>Price: ${price}</li>
          <li>
            Ad Category: {category} {topic}
          </li>
          <li>Title: {title}</li>
          <li>Description: {description}</li>
        </ul>
        <br />
        <Button
          label="Post"
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
