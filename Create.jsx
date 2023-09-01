import React, { useState } from "react";

export default function Create() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
  });

  function onHandleChange(e) {
    // console.log(e.target.value);
    // console.log(e.target.name);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  const printValues = (e) => {
    e.preventDefault();
    console.log(formData.firstname, formData.lastname);
  };

  return (
    <>
      <form onSubmit={printValues}>
        <label htmlFor="fname"> First Name : </label>
        <input
          type="text"
          placeholder="john"
          name="firstname"
          value={formData.firstname}
          onChange={onHandleChange}
        />
        <br />
        <br />
        <label htmlFor="lname"> Last Name : </label>
        <input
          type="text"
          placeholder="doe"
          name="lastname"
          value={formData.lastname}
          onChange={onHandleChange}
        />{" "}
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
      <br />
    </>
  );
}
