import React, { useState } from 'react';
import SearchForm from '../../components/SearchForm/SearchForm'
import './ResultsPage.css';


export default function ResultsPage() {
    const [error, setError] = useState(null)
    const errorDiv = error ? <div className="error">{error}</div> : '';

    return(
        <div>
            <SearchForm />
        </div>
    )
}