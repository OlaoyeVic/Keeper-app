import React, { useState } from "react";

function CreateArea(props) {
  const [noteTitle, setNoteTitle] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { value, name } = event.target;

    setNoteTitle((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  /*function submitNote(event){
    props.onAdd(noteTitle)
  }*/

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          value={noteTitle.title}
          name="title"
          placeholder="Title"
        />
        <textarea
          onChange={handleChange}
          value={noteTitle.content}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button
          onClick={(event) => {
            props.onAdd(noteTitle);
            setNoteTitle({
              title: "",
              content: ""
            });
            event.preventDefault();
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
