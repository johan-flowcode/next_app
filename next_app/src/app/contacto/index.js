// src/app/contacto/index.js

import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
export default contacto; 

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para manejar el envío del formulario
  };

  return (
    <div>
      <h1>Contacto</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" name="nombre" required />
        </label>
        <br />
        <label>
          Correo Electrónico:
          <input type="email" name="email" required />
        </label>
        <br />
        <label>
          Mensaje:
          <textarea name="mensaje" required />
        </label>
        <br />
        <ReCAPTCHA sitekey="6LcLTFQpAAAAAKzRJV0o2EBWskuO6wb6YSc_AGwM" />
        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );



