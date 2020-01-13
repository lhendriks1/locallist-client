import React, { useState, useEffect} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from '@material-ui/core/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default function FormUserDetails(props) {
    const [ error, setError ] = useState(null)

    const errorDiv = error 
    ? <div className="error">
        <i class="material-icons error-icon">error_outline</i>
        {error}
      </div> 
    : '';

    useEffect(() => setError(null), [])

    function cont(e) {
        e.preventDefault();
        const requiredFields = ['firstName', 'lastName', 'email', 'zipCode']

        for (const key of requiredFields) {
            if (!values[key] && key === "firstName") {
                setError('A first name is required')
                return

            } 
            if (!values[key] && key === "lastName") {
                setError('A last name is required')
                return

            }
            if (!values[key] && key === "zipCode") {
                setError('A zip code is required')
                return

            }
            if (!values[key]) {
                setError(`A ${key} is required`)
                return

            }
        }

        props.nextStep();
    };

    const { values, handleChange } = props;

    return (
        <MuiThemeProvider>
            <div className="FormUserDetails">
            <h2>Enter personal details</h2>
            {errorDiv}
            <TextField 
                required
                fullWidth
                label="First Name"
                onChange={handleChange('firstName')}
                defaultValue={values.firstName}
            />
            <br />
            <TextField 
                required
                fullWidth
                label="Last Name"
                onChange={handleChange('lastName')}
                defaultValue={values.lastName}
            />
            <br />
            <TextField 
                required
                fullWidth
                label="Email"
                onChange={handleChange('email')}
                defaultValue={values.email}
            />
            <br />
            <TextField 
                required
                fullWidth
                label="Zip Code"
                onChange={handleChange('zipCode')}
                defaultValue={values.zipCode}
            />
            <br />
            <RaisedButton
                label="Continue"
                primary={true}
                style={styles.button}
                onClick={cont}
            >

            </RaisedButton>

            </div>
        </MuiThemeProvider>
    )
}

const styles = {
    button: {
        margin: 15
    }
}