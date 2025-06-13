import React, { useState } from "react";

function FormPage({ onSubmit, onCancel }) {
  const [form, setForm] = useState({
    bookname: "",
    author: "",
    edition: "",
    available: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    setForm({ bookname: "", author: "", edition: "", available: "" });
  };

  return (
    <div id="formbox">
      <form onSubmit={handleSubmit}>
        <label htmlFor="bookname">Book Name</label>
        <input type="text" id="bookname" name="bookname" value={form.bookname} onChange={handleChange} required />
        <br /><br />

        <label htmlFor="author">Author</label>
        <input type="text" id="author" name="author" value={form.author} onChange={handleChange} required />
        <br /><br />

        <label htmlFor="edition">Edition</label>
        <input type="text" id="edition" name="edition" value={form.edition} onChange={handleChange} required />
        <br /><br />

        <label htmlFor="available">Available</label>
        <input type="text" id="available" name="available" value={form.available} onChange={handleChange} required />
        <br /><br />

        <button type="submit">Submit</button>
        <button type="button" style={{ marginLeft: "10px" }} onClick={onCancel}>Cancel</button>
      </form>
    </div>
  );
}

export default FormPage;
