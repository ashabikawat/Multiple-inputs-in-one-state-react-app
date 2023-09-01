import axios from "axios";
import React, { useState } from "react";

export default function Create() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
  });

  function handleChange(e) {
    // console.log(e.target.value);
    // console.log(e.target.name);

    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(user);
    axios.post("https://64e76044b0fd9648b78fdeda.mockapi.io/users", user);

    alert("data is submitted");
    setUser({
      firstName: "",
      lastName: "",
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="fname">First Name : </label>
      <input
        type="text"
        placeholder="john"
        name="firstName"
        value={user.firstName}
        onChange={handleChange}
      />
      <br />
      <br />
      <label htmlFor="lname">Last Name : </label>
      <input
        type="text"
        placeholder="doe"
        name="lastName"
        value={user.lastName}
        onChange={handleChange}
      />
      <br />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
