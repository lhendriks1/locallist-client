import React, { useState } from 'react';
import './AdPage.css';


export default function AdPage() {
    const [error, setError] = useState(null)
    const errorDiv = error ? <div className="error">{error}</div> : '';

    return(
        <div></div>
    )
}