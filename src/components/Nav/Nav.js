import React, { useContext } from 'react';
import { withRouter } from "react-router";
import { useHistory } from 'react-router-dom';
import './Nav.css';

export default function Nav() {
    const history = useHistory();
    console.log(history.location.pathname)

    const location = history.location.pathname;

    let styles='';

    if (location === "/ads") {
        styles="ResultsPage";
    }

    return (
        <nav className={styles}>
            <button onClick={() => history.push('/')}>
                <span>LocalList</span>
            </button>
            <span>
                <button onClick={() => history.push('/profile')}>
                    My Account
                </button>
                <button onClick={() => history.push('/post')}>
                    Post
                </button>
            </span>
        </nav>
    )
}