import React from "react";

export default function Modal(props) {
  const { modal, restart, win, isGameOver, score } = props;

  if (isGameOver) {
    if (win) {
      return (
        <div className={modal.join(" ")}>
          <div className="modal-background"></div>
          <div className="modal-content">
            <div class="notification is-primary is-light">
              <button onClick={restart} class="delete"></button>
              <strong className="is-size-3">Congratulations!</strong>
              <p className="mb-1">
                You completed the game without clicking any image twice!
              </p>
              <p>
                <strong>Score: </strong>
                {score.score}
              </p>
              <p>
                <strong>Top Score: </strong>
                {score.topScore}
              </p>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className={modal.join(" ")}>
          <div className="modal-background"></div>
          <div className="modal-content">
            <div class="notification is-danger is-light">
              <button onClick={restart} class="delete"></button>
              <strong className="is-size-3">Oops!</strong>
              <p className="mb-1">You just clicked an image twice!</p>
              <p>
                <strong>Score: </strong>
                {score.score}
              </p>
              <p>
                <strong>Top Score: </strong>
                {score.topScore}
              </p>
            </div>
          </div>
        </div>
      );
    }
  } else {
    return null;
  }
}
