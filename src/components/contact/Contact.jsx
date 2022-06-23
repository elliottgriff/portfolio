import { React, useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { MdOutlinePhone } from 'react-icons/md';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_0znpeoq',
      'template_l7rug2j',
      form.current,
      'D3Z2xi7rCQisabcxd'
    );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h2>Get in Touch</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <h5>
              <MdOutlineEmail className="contact__option-icon" />
            </h5>
            <h3>Email</h3>
            <a href="mailto:elliottcgriffin@me.com">Send a Message</a>
          </article>
          <article className="contact__option">
            <h5>
              <MdOutlinePhone className="contact__option-icon" />
            </h5>
            <h3>Phone</h3>
            <a href="tel:2034494789">Call Me</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Full Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Leave a Message"
            required
          ></textarea>
          <button type="submit" className="formButton btn btn-primary">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
