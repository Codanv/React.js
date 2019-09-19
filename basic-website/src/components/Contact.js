import React from "react";

function Contact() {
  return (
    <>
      <h2>Contact</h2>
      <form>
        <div>
          <input type="text" placeholder="Your Full Name" />
        </div>
        <div>
          <textarea rows="12" cols="40" placeholder="Message"></textarea>
        </div>
        <input type="button" value="Send Message" />
      </form>
    </>
  );
}

export default Contact;
