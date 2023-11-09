import React, { useState } from "react";

function Create(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "title") {
      setTitle(value);
    } else if (name === "content") {
      setContent(value);
    }
  };

  const handleAddNote = () => {
    props.onCreate(title, content);
    setTitle("");
    setContent("");
  };

  return (
    <div>
      <form className="create-note">
        <input name="title" placeholder="Title" onChange={handleInputChange} />
        <textarea
          name="content"
          placeholder="Take a note..."
          value={content}
          onChange={handleInputChange}
          rows={3}
        />
        <button onClick={handleAddNote}>Add</button>
      </form>
    </div>
  );
}

export default Create;
