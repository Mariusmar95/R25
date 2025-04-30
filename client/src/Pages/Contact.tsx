import ContactForm from "../components/ContactForm";
import Map from "../components/Map";

function Contact() {
  return (
    <div>
      <div className="relative w-full h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[50vh] ">
        <img
          className="w-full h-full object-cover"
          src="src/assets/banner3.jpg"
          alt="banner"
        />
      </div>

      <div>
        <ContactForm />
      </div>

      <div>
        <Map />
      </div>
    </div>
  );
}

export default Contact;
