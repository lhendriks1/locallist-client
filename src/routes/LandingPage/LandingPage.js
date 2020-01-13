import React from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

export default function LandingPage() {
    const history = useHistory();

    
    return(
        <section className="heading-primary">
          <h1>LocalList</h1>
            <span className="heading-primary-sub">Community classifieds</span>
            <p className="section-one">Connect with people in your community to buy and sell goods, procure services from specialists, advertise housing, and much more.</p>
          <button onClick={() => history.push('/topics')}>
            Browse
            </button>
        </section>

    )
}