import React, { useState } from "react";

function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formState;

  // This function will sync the internal state of the component formState with the user input from the DOM. The onChange event listener will ensure that the handleChange function fires whenever a keystroke is typed into the input field for name. In the preceding function, we're using the setFormState function to update the formState value for the name property. We assign the value taken from the input field in the UI with e.target.value and assign this value to the property formState.name. We use the spread operator, ...formState, so we can retain the other key-value pairs in this object. Without the spread operator, the formState object would be overwritten to only contain the name: value key pair.
  function handleChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  // Due to keywords reserved in JavaScript, we need to replace the for attribute in the <label> element to htmlFor, just as class had to be changed to className previously.
  return (
    <section>
      <h1>Contact me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            defaultValue={name}
            onChange={handleChange}
            name="name"
          />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            defaultValue={email}
            name="email"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            defaultValue={message}
            onChange={handleChange}
            rows="5"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
