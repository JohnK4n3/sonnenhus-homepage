import React from 'react';
import ContactForm from '../components/contactForm';
function Contact() {
    const onSubmit = (e) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
    //   submitFormDataToServer(formData);
    };

    return (
     
     <main style={{minHeight:"calc(100vh - 212px"}}>
        <p>Nutzen Sie gerne das Kontaktformular, um Ihre Fragen an uns zu richten.</p>
        <br/>
     <div>
      <ContactForm></ContactForm>
    
    </div>  
</main>
   )
}
export default Contact;
