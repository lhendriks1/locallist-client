import React, { Component } from 'react';
import FormUserDetails from '../../components/PostAdForm/FormUserDetails';
import FormTopicDetails from '../../components/PostAdForm/FormTopicDetails';
import FormCategoryDetails from '../../components/PostAdForm/FormCategoryDetails';
import FormItemDetails from '../../components/PostAdForm/FormItemDetails';
import Confirm from '../../components/PostAdForm/Confirm';
import Success from '../../components/PostAdForm/Success';
import '../../styles/forms.css';



export default class PostAdPage extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        zipCode: '',
        title: '',
        description: '',
        price: '',
        topic: '',
        category: ''
    }

    nextStep = () => {
        const {step} = this.state;
        this.setState(prev => {
            return { step: prev.step + 1 }
        })
    }

    prevStep = () => {
        const {step} = this.state;
        this.setState(prev => {
            return { step: prev.step - 1 }
        })
    }

    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }

    render() {
        const { step } = this.state;
        const { firstName, lastName, email, zipCode, title, description, price, topic, category } = this.state;
        const values =  { firstName, lastName, email, zipCode, title, description, price, topic, category };
    
        switch (step) {
            case 1: 
                return (
                    <FormUserDetails 
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 2: 
                return (
                    <FormCategoryDetails 
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 3: 
                return (
                    <FormTopicDetails 
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 4:
                return (
                    <FormItemDetails
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 5: 
                return (
                    <Confirm 
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                    />
                );
            case 5: 
                return (
                    <Success />
                );

        }
    }

}