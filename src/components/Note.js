import React from "react";

const Note = (props) => {
  function handleClick(event) {
    props.onDelete(props.id);
  }
  return (
    <div className="note">
      <h1>{props.fname}</h1>
      <h1>{props.lname}</h1>
      <h1>{props.email}</h1>
      <h1>{props.type}</h1>
      <h1>{props.phone}</h1>
      <p> {props.password}</p>
      <p> {props.cpassword}</p>
      <button onClick={handleClick}> Delete </button>
    </div>
  );
};

export default Note;
