function Contact() {
  return (
    <div className="contact-page">
      <section className="contact-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Reach out for bookings, inquiries, or feedback.</p>
      </section>

      <section className="contact-content">
        <div className="contact-details">
          <h2>Our Location</h2>
          <p>123 Silver Spoon Street, Victoria Island, Lagos</p>
          <p>📞 +234 812 345 6789</p>
          <p>✉️ info@silverspoon.ng</p>
        </div>

        <form className="contact-form">
          <h2>Send Us a Message</h2>

          <label>Name</label>
          <input type="text" placeholder="Enter your name" />

          <label>Email</label>
          <input type="email" placeholder="Enter your email" />

          <label>Message</label>
          <textarea placeholder="Write your message here..."></textarea>

          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
}

export default Contact;
