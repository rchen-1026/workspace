import React from "react";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.data.title}</h1>
      <p>{props.data.content}</p>
      <button
        onClick={() => {
          props.onDelete(props.id);
        }}
      > DELETE
      </button>
    </div>
  );
}
export default Note;