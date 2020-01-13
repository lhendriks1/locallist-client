
import React from 'react';
import './SearchForm.css';

export default function SearchForm() {
    
    return(
        <form class="nav-search">
            <div class="search">
                <div class="search_categories">
                    <div class="select">
                        <select name="search_categories" id="search_categories">
                            <option value="for-sale" selected="selected">For Sale</option>
                            <option value="community">Community</option>
                            <option value="services">Services</option>
                            <option value="housing">Housing</option>
                            <option value="jobs">Jobs</option>
                            <option value="events">Events</option>
                        </select>
                    </div>
                </div>
                <input placeholder="location"></input>
                <input placeholder="search for services"></input>
                <button class="search-button">Search</button>
        </div>
        </form>
    )
}