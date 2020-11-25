import React from "react";

export default function Modal(props) {
  const {} = props;
  return (
    <div className="modal">
      <div className="modal-background"></div>
      <div className="modal-content">
        <div class="notification is-danger is-light">
          <button class="delete"></button>
          <strong className="is-size-3">{}</strong>
          <p>{}</p>
        </div>
      </div>
    </div>
  );
}
