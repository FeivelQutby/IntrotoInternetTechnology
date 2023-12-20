import { useState } from 'react';
import './App.css';

function App() {
  const [contact, setContact] = useState({
    fname: "",
    lname: "",
    email: ""
  });

  function handleChange(event) {
    const { value, name } = event.target;

    setContact((prevValue) => ({
      ...prevValue,
      [name]: value
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(contact);

    setContact({
      fname: "",
      lname: "",
      email: ""
    });
  }

  return (
    <div className="container">
      <h1>Hello {contact.fname} {contact.lname}</h1>
      <center><p1>{contact.email}</p1></center>
      <form onSubmit={handleSubmit}>
        <input
          name="fname"
          type="text"
          placeholder="First Name"
          value={contact.fname}
          onChange={handleChange}
        />
        <input
          name="lname"
          type="text"
          placeholder="Last Name"
          value={contact.lname}
          onChange={handleChange}
        />
        <input
          name="email"
          type="text"
          placeholder="Email"
          value={contact.email}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
