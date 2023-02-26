import ContactForm from "./ContactForm"
function Contact() {
  return (
    <div>

      <div className="contactAdr">
        <h2 className="contactAdrOne">Свяжитесь с нами по телефону:</h2>
        <a className="phone" href="tel: +79067003326">+79067003326</a>
      </div>

        <div className="contact">

          <div className="contactOne">
          <h2 className="contactTwo">Напишите нам</h2>
          <ContactForm />

          </div>
      </div>
      <footer>
        <p>© 2023 Travel</p>
        </footer>
    </div>
  );
}
export default Contact;
