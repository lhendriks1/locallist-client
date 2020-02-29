import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "../../styles/forms.css";

export default function LoginPage(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginSuccess = () => {
    const { history } = props;
    history.push("/topics");
  };

  return (
    <>
      <div className="LoginPage">
        <h2>Log In</h2>
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
        <Button
          label="Log In"
          primary={true}
          style={styles.button}
          onClick={handleLoginSuccess}
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
