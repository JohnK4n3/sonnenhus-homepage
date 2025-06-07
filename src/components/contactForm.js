import React, { useState } from 'react';
import axios from 'axios';

export default () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [inputs, setInputs] = useState({
    forename: '',
    surname: '',
    email: '',
    message: '',
  });
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        forename: '',
        surname: '',
        email: '',
        message: '',
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };
  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: 'POST',
      url: 'https://formspree.io/f/meokebnv',
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          'Danke, Ihre Nachricht wurde versandt.',
        );
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };
  return (
    <main>
     
      <form className="contact-form" onSubmit={handleOnSubmit}>
        <label htmlFor="forename">Vorname</label>
        <input className="contact-input"
          id="forename"
          type="text"
          name="forename"
          onChange={handleOnChange}
          required
          value={inputs.forename}
        />
       <label htmlFor="surname">Nachname</label>
        <input className="contact-input"
          id="surname"
          type="text"
          name="surname"
          onChange={handleOnChange}
          required
          value={inputs.surname}
        />
        <label htmlFor="_replyto">E-Mail-Adresse</label>
        <input className="contact-input"
          id="email"
          type="email"
          name="_replyto"
          onChange={handleOnChange}
          required
          value={inputs.email}
        />
       
        <label htmlFor="message">Ihre Nachricht</label>
        <textarea className="contact-input"
          style={{ height: '200px' }}
          id="message"
          name="message"
        //   placeholder="Hier steht Ihre Nachricht."
          onChange={handleOnChange}
          required
          value={inputs.message}
        />
        <button className= "Absenden-button" type="submit" disabled={status.submitting}>
          {!status.submitting
            ? !status.submitted
              ? 'Absenden'
              : 'Abgeschickt!'
            : 'Absenden...'}
        </button>
      </form>
      {status.info.error && (
        <div className="error">Error: {status.info.msg}</div>
      )}
      {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
    </main>
  );
};