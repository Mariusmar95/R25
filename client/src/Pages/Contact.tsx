import Banner from "../components/Banner";
import ContactForm from "../components/ContactForm";
import Map from "../components/Map";

function Contact() {
  return (
    <>
      <Banner imageSrc="/banner3.jpg " />
      <ContactForm />
      <div>
        <Map />
      </div>
    </>
  );
}

export default Contact;
