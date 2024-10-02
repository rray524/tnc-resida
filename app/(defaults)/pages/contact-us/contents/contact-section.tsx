import { ContactCard } from "../components/contact-card";
import ContactForm from "../components/contact-form";
import GoogleMap from "../components/google-map";
import { contactInfos } from "../data/contact-data";

const ContactSection = () => {
  return (
    <section className="py-20 px-3">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {contactInfos.map((info, index) => (
          <ContactCard key={index} {...info} />
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto py-20 px-2 md:px-0 items-center">
        <ContactForm />
        <GoogleMap />
      </div>
    </section>
  );
};

export default ContactSection;
