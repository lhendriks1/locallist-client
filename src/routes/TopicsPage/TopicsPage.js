import React, { useState } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import "./TopicsPage.css";

export default function TopicsPage() {
  const [error, setError] = useState(null);
  const errorDiv = error ? <div className="error">{error}</div> : "";

  return (
    <div className="TopicsPage">
      <Hero />
      <div className="TopicsContent">
        <TopicsGrid />
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Anything you need,
          <span className="line2">we've got you covered</span>
        </h1>
        <p className="subtitle">Classified advertisements website</p>
        <SearchForm />
      </div>
    </section>
  );
}

function TopicsGrid() {
  return (
    <section className="grid">
      <div className="for-sale-grid">
        <h2>For Sale</h2>
        <ul className="topics-list">
          <li>Antiques</li>
          <li>Appliances</li>
          <li>Auto parts</li>
          <li>Bikes</li>
          <li>Collectibles</li>
          <li>Photo / Video</li>
          <li>Music Instruments</li>
          <li>Sporting</li>
          <li>Tickets</li>
        </ul>
      </div>
      <div className="community-grid">
        <h2>Community</h2>
        <ul className="topics-list">
          <li>Activites</li>
          <li>Artists</li>
          <li>Classes</li>
          <li>Fitness</li>
          <li>Lost & Found</li>
          <li>Rideshare</li>
          <li>Volunteer</li>
        </ul>
      </div>
      <div className="services-grid">
        <h2>Services</h2>
        <ul className="topics-list">
          <li>Automotive</li>
          <li>Beauty</li>
          <li>Computer</li>
          <li>Farm / Garden</li>
          <li>Household</li>
          <li>Labor / Move</li>
          <li>Pet</li>
          <li>Photography</li>
          <li>Travel / Vacation</li>
        </ul>
      </div>
      <div className="housing-grid">
        <h2>Housing</h2>
        <ul className="topics-list">
          <li>Apartments</li>
          <li>Housing Wanted</li>
          <li>Office / Commercial</li>
          <li>Sublets</li>
          <li>Realestate For Sale</li>
          <li>Vacation Rentals</li>
        </ul>
      </div>
      <div className="jobs-grid">
        <h2>Jobs</h2>
        <ul className="topics-list">
          <li>Art / Media / Design</li>
          <li>Construction</li>
          <li>Education</li>
          <li>Food / Hospitality</li>
          <li>Landscaping</li>
          <li>Salon / Spa / Fitness</li>
          <li>Web / Info / Design</li>
        </ul>
      </div>
      <div className="events-grid">
        <h2>
          Events
          <p>[Placeholder for calendar]</p>
        </h2>
      </div>
    </section>
  );
}
