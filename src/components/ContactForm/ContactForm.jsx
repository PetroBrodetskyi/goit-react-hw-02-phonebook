import React from 'react';
import css from "./ContactForm.module.css"

const ContactForm = ({ name, number, onChange, onSubmit }) => (
  <form className={css.contactsflex} onSubmit={onSubmit}>
    <input
      className={css.contactinput}
      type="text"
      name="name"
      value={name}
      onChange={onChange}
      placeholder="Ім'я"
      required
        
    />
    <input
      className={css.contactinput}
      type="tel"
      name="number"
      value={number}
      onChange={onChange}
      placeholder="Номер телефону"
      required
    />
    <button className={css.contactbutton} type="submit">Додати контакт</button>
  </form>
);

export default ContactForm;
