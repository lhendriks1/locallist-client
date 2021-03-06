import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "../../styles/forms.css";

export default function RegistrationPage(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");

  const updateLoginStatus = () => {
    // TODO: implement snackbar and call here
    // updateRegistrationMsg("Successful user registration");
    // setTimeout(() => updateRegistrationMsg(''), 10000);
    props.history.push("/topics");
  };

  const handleRegistration = () => {
    // TODO validate passwords match
    const { history } = props;
    //TODO send form data to server & snackbar
    history.push("/topics");
  };

  return (
    <>
      <div className="RegistrationPage">
        <h2>Register</h2>
        <TextField
          required
          fullWidth
          label="Username"
          onChange={e => setUsername(e.target.value)}
          defaultValue={username}
        />
        <br />
        <TextField
          required
          fullWidth
          type="password"
          label="Password"
          onChange={e => setPassword(e.target.value)}
          defaultValue={password}
        />
        <br />
        <TextField
          required
          fullWidth
          type="password"
          label="Retype Password"
          onChange={e => setRetypePassword(e.target.value)}
          defaultValue={retypePassword}
        />
        <br />
        <Button
          label="Log In"
          primary={true}
          style={styles.button}
          onClick={handleRegistration}
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
