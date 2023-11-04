import React from 'react';
import css from "./ContactList.module.css"

const ContactList = ({ contacts, filter, onDelete }) => {
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.linone}>
      {filteredContacts.map((contact) => (
        <li className={css.liflex} key={contact.id}>
          {contact.name}: {contact.number}
          <button className={css.contactlistbutton} onClick={() => onDelete(contact.id)}>Видалити</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
