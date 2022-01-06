import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "./admin.css";
const AddAdmin = () => {
  const [email, setEmail] = useState("");

  const handleOnChange = (e) => {
    const value = e.target.value;
    setEmail(value);
  };

  const handleAddAdmin = (e) => {
    e.preventDefault();
    fetch(`https://limitless-hollows-74908.herokuapp.com/admin/${email}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <Container>
      <h2 data-aos="fade-down-right" className="text-center">
        Add An Admin
      </h2>
      <form
        className="mt-3 pt-2 d-flex justify-content-center py-3"
        onSubmit={handleAddAdmin}
      >
        <input
          required
          className="adminAdd   my-4 w-25"
          type="email"
          onChange={handleOnChange}
          placeholder="email"
          name="email"
          id="email"
        />
        <button className="adminAdd btncolr px-5 my-4 fs-3 ">Add </button>
      </form>
    </Container>
  );
};

export default AddAdmin;
