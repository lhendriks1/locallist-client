import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Checkbox from './Checkbox';


export default function CheckboxContainer(props) {
    const [checkedItems, setCheckedItems] = useState({});
    const [legend, setLegend] = useState('')
    const [checkboxes, setCheckboxes] = useState([]);

    useEffect(() => {
        setCheckboxes(props.checkboxes);
        setLegend(props.legend)
    }, [])

    const handleChange = e => {
        setCheckedItems({...checkedItems, [e.target.name]: e.target.checked });
    };

    return (
        <div className="CheckboxContainer-wrapper">
            <legend>{legend}</legend> 
            {
                checkboxes.map(item => {
                    const {name, label} = item
                    return (
                    <label key={item.key}>
                        <Checkbox name={name} checked={checkedItems[name]} onChange={handleChange} />
                        {label}
                    </label>
                )})
            }
        </div>
    )

}