
import React from 'react';
import { useHistory } from 'react-router-dom';
import './SearchForm.css';

export default function SearchForm() {
    const history = useHistory();
    console.log(history.location.pathname);
    const location = history.location.pathname;
    let styles = '';

    if (location === "/ads") {
        styles="ResultsPage";
    }

    return(
            <form className={"nav-search " + styles}>
                <div className={"search " + styles}>
                    <div className="search_categories">
                        <div className="select">
                            <select name="search_categories" id="search_categories">
                                <option value="for-sale" defaultValue >For Sale</option>
                                <option value="community">Community</option>
                                <option value="services">Services</option>
                                <option value="housing">Housing</option>
                                <option value="jobs">Jobs</option>
                                <option value="events">Events</option>
                            </select>
                        </div>
                        <input placeholder="location"></input>
                        <input placeholder="search for services"></input>
                    </div>
                    <button className={"search-button " + styles}>Search</button>
                </div>
            </form>
    )
}