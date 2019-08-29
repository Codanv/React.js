import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div>
        <h2>Contact</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sequi ad
          recusandae quam illum deleniti aliquid ex ipsum. Nihil aperiam
          eligendi corrupti inventore accusantium delectus quae perferendis
          voluptatum laboriosam alias.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quae,
          explicabo reprehenderit ea nesciunt quia est minus corrupti architecto
          dignissimos nulla sit ex perferendis quaerat sequi? Facilis, voluptate
          illo. Explicabo.
        </p>

        <p>
          <form>
            <input type="text" name="email" placeholder="Enter your email:" />
            <input type="submit" value="Subscribe" />
          </form>
        </p>
      </div>
    );
  }
}

export default Contact;
