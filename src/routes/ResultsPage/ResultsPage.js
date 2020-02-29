import React, { useState } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import ResultFilters from "../../components/ResultFilters/ResultFilters";
import ResultGrid from "../../components/ResultGrid/ResultGrid";
import "./ResultsPage.css";

export default function ResultsPage() {
  const [error, setError] = useState(null);
  const errorDiv = error ? <div className="error">{error}</div> : "";

  return (
    <>
      <div className="SearchForm-wrapper">
        <SearchForm />
      </div>
      <div className="ResultsPage-row">
        <ResultFilters />
        <ResultGrid />
      </div>
    </>
  );
}
