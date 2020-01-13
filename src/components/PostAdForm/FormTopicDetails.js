import React, { useState } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import RaisedButton from 'material-ui/RaisedButton';

export default function FormTopicDetails(props) {
    const { values, handleChange } = props;
    const {topics, formattedCategory} = useTopics(props.values)
    const [ error, setError ] = useState(null)

    const errorDiv = error 
    ? <div className="error">
        <i class="material-icons error-icon">error_outline</i>
        {error}
      </div> 
    : '';

    function cont(e) {
        e.preventDefault();

        if (!values.category) {
            setError('Choose a topic')
            return
        }
        props.nextStep();
    }; 

    function back() {
        props.prevStep();
    }

    return (
        <MuiThemeProvider>
            <div className="FormTopicDetails">
            <h2>Choose the {formattedCategory} topic</h2>
            {errorDiv}
            <RadioGroup 
                required
                aria-label="ad-topic" 
                name="topic" 
                onChange={handleChange('topic')}
                >
                {topics}
            </RadioGroup>

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

function useTopics(values) {
    const forSale = ["antiquest", "art", "appliances", "bikes", "collectibles", "music", "photography", "sporting", "tickets", "vehicles"];
    const community = ["activites", "artists", "classes", "fitness", "lost+found", "rideshare", "volunteer"]
    const housing = ["apartments", "office/commerical", "realestate", "sublets", "vacation"]
    const events = ["art", "music", "food", "theatre"]
    const services = ["automotive", "beauty", "computer", "farm/garden", "household", "labor", "pet", "photography", "travel"];
    const jobs = ["art/media/design", "construction", "education", "food/hospitality", "landscaping", "salon/spa", "fitness", "web/info"];

    let activeCategory;
    let formattedCategory;

    if (values.category === "for-sale") {
        activeCategory = forSale;
        formattedCategory = "item";
    };

    if (values.category === "community") {
        activeCategory = community;
        formattedCategory = "community ";
    }
    if (values.category === "housing") {
        activeCategory = housing;
        formattedCategory = "housing";
    }
    if (values.category === "events") {
        activeCategory = events;
        formattedCategory = "event";
    }
    if (values.category === "jobs") {
        activeCategory = jobs;
        formattedCategory = "job";
    }
    if (values.category === "services") {
        activeCategory = services;
        formattedCategory = "service"
    }

    const capitalize = (string) =>{
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    const topics = activeCategory.map(item => {
        return (
            <FormControlLabel value={item} control={<Radio />} label={capitalize(item)}/>
        )
    })

    return { topics, formattedCategory };

}