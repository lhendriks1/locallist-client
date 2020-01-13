import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import { StylesProvider } from '@material-ui/core';

export default function Confirm(props) {
    function cont(e) {
        e.preventDefault();
        console.log(e.target.value)
        //PROCESS FORM HERE//
        props.nextStep();
    };

    function back() {
        props.prevStep();
    }

    const { values: { firstName, lastName, email, zipCode, title, description, price, category, topic } } = props;

    return (
        <MuiThemeProvider>
            <div className="Confirmation">
            <h2>Confirm Ad Information</h2>
            <ul class="confirmation-list">
                <li>Name: {firstName} {lastName}</li>
                <li>Email: {email}</li>
                <li>Zip Code: {zipCode}</li>
                <li>Price: ${price}</li>
                <li>Ad Category: {category} {topic}</li>
                <li>Title: {title}</li>
                <li>Description: {description}</li>
            </ul>
            <br />
            <RaisedButton
                label="Post"
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
    }
}