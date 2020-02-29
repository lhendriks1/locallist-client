import React from 'react';
import CheckboxContainer from '../../components/Checkbox/CheckboxContainer';
import RangeSlider from '../../components/RangeSlider/RangeSlider';

export default function ResultFilters() {
    const showOnly=[
        {
            name: 'postedToday',
            key: 'postedToday',
            label: 'Posted today', 
        }, 
        {
            name: 'hasImage',
            key: 'hasImage',
            label: 'Has image'
        },
        {
            name: 'titlesOnly',
            key: 'titlesOnly',
            label: 'Search titles only'
        }
    ]

    return (
        <div className="ResultFilters-col">
            <CheckboxContainer checkboxes={showOnly} legend={'Show only'}/>
            <br />
            <RangeSlider max={1000} />
        </div>
    )
}
