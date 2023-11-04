import React, { Component } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import { nanoid } from 'nanoid'
import css from "./App.module.css"
import { AiFillPhone, AiFillContacts } from "react-icons/ai";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number, contacts } = this.state;

    if (contacts.some((contact) => contact.name === name)) {
      Notify.failure(`${name} вже є в списку контактів.`, {
        position: 'center-bottom',
        timeout: 3000,
        width: '320px',
        fontSize: '18px'
      });
      return;
    }

    const newContact = { id: nanoid(), name, number };
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
      name: '',
      number: '',
    }));
  };

  handleDelete = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter, name, number } = this.state;
    return (
      <div className={css.sectionapp}>
        <div className={css.titleflex}><h1 className={css.sectiontitle}>Phonebook</h1><AiFillPhone className={css.iconphone}/></div>
        <ContactForm
          name={name}
          number={number}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />

        <div className={css.titleflex}><h2>Contacts</h2><AiFillContacts className={css.iconcontacts}/></div>
        <Filter value={filter} onChange={this.handleChange} />
        <ContactList contacts={contacts} filter={filter} onDelete={this.handleDelete} />
      </div>
    );
  }
}

export default App;