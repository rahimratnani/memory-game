import React from "react";

export default function Navbar(props) {
  const { score } = props;
  return (
    <nav
      className="navbar is-flex has-shadow is-justify-content-space-between"
      role="navigation"
      aria-label="main navigation"
    >
      <h1 className="navbar-item title is-size-4-mobile mb-0">Memory Game</h1>
      <div className="navbar-item is-flex is-flex-direction-row">
        <div
          id="score"
          className="is-flex is-align-items-center is-flex-direction-column mr-3"
        >
          <h3 className="has-text-weight-bold">Score</h3>
          <p>{score.score}</p>
        </div>
        <div
          id="topScore"
          className="is-flex is-align-items-center is-flex-direction-column"
        >
          <h3 className="has-text-weight-bold">Top Score</h3>
          <p>{score.topScore}</p>
        </div>
      </div>
    </nav>
  );
}
