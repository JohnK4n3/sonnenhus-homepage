import React from 'react';
// import AutoHeight from '../components/autoheight';


function Contact() {
    const onSubmit = (e) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
    //   submitFormDataToServer(formData);
    };

    return (
     
     <main>
        <p>Nutzen Sie gerne das Kontaktformular, um Ihre Fragen an uns zu richten.</p>
        <br/>
        <div>
     <form onSubmit={onSubmit}>
      
        <input
          type="text"
          placeholder="Vorname"
          name="Vorname"
        />
        <br/>
        <input
          type="text"
          placeholder="Nachname"
          name="Nachname"
        />      
       <br/>
             <input type="text" placeholder="E-Mail-Adresse" id="email" name="email"/><br/>
             
             <textarea id="message" style={{width:"300px", height:"200px"}} name="message" placeholder="Hier steht Ihre Nachricht."/><br/>
        <button type="submit">
          Absenden
        </button>
      </form>
  






    
    </div>  
</main>
   )
}
export default Contact;
