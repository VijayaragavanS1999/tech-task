import React, { useState } from "react";

function CreateArea(props) {
  const [note, setnote] = useState({
    fname: "",
    lname: "",
    email: "",
    type: "",
    phone: "",
    password: "",
    cpassword: " ",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setnote((prev) => {
      return { ...prev, [name]: value };
    });
  }
  function handleClick(e) {
    props.onAdd(note);
    setnote({
      fname: "",
      lname: "",
      email: "",
      type: "",
      phone: "",
      password: "",
      cpassword: " ",
    });
    e.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="fname"
          onChange={handleChange}
          value={note.fname}
          placeholder="First Name"
        />
        <input
          name="lname"
          onChange={handleChange}
          value={note.lname}
          placeholder="Last Name"
        />
        <input
          name="email"
          onChange={handleChange}
          value={note.email}
          placeholder="Email Id"
        />
        <input
          name="type"
          onChange={handleChange}
          value={note.type}
          placeholder="Type:  Admin / user"
        />
        <input
          name="phone"
          onChange={handleChange}
          value={note.phone}
          placeholder="Phone No"
        />
        <input
          name="password"
          onChange={handleChange}
          value={note.password}
          placeholder="Password"
        />
        <input
          name="cpassword"
          onChange={handleChange}
          value={note.cpassword}
          placeholder="Confirm Password"
        />

        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
