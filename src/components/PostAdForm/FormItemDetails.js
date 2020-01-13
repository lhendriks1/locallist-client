import React, { useState, useEffect } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from '@material-ui/core/TextField'
import RaisedButton from 'material-ui/RaisedButton';

export default function FormItemDetails(props) {
    const { values, handleChange } = props;
    const [ error, setError ] = useState(null)
    console.log(values)

    const errorDiv = error 
    ? <div className="error">
        <i class="material-icons error-icon">error_outline</i>
        {error}
      </div> 
    : '';

    useEffect(() => setError(null), []);

    function cont(e) {
        e.preventDefault();

        const requiredFields = ['title', 'description', 'price']

        for (const key of requiredFields) {
            if (!values[key]) {
                setError(`A ${key} is required`)
                return
            }
        }
        props.nextStep();
    };  

    function back() {
        props.prevStep();
    }
//TODO remove unused dependencies (react resize)

    return (
        <MuiThemeProvider>
            <div className="FormItemDetails">
            <h2>Enter the advertisement details</h2>
            {errorDiv}
            <TextField 
                required={true}
                fullWidth={true}
                label="Ad Title"
                onChange={handleChange('title')}
                defaultValue={values.title}
            />
            <br />
            <TextField 
                required={true}
                fullWidth={true}
                multiline
                label="Ad Description"
                onChange={handleChange('description')}
                defaultValue={values.description} 
            />
            <br />
            <TextField 
                required
                fullWidth
                label="Price"
                onChange={handleChange('price')}
                defaultValue={values.price}
                
            />
            <br />
            <RaisedButton
                label="Continue"
                primary={true}
                style={styles.button}
                onClick={cont}
            />
            <RaisedButton
                label="Back"
                primary={false}
                style={styles.button}
                onClick={back}
            />
            </div>
        </MuiThemeProvider>
    )
}

const styles = {
    button: {
        margin: 15
    },
}