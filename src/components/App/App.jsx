import React, { Component } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import { nanoid } from 'nanoid'
import css from "./App.module.css"

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
      alert(`${name} вже є в списку контактів.`);
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
        <h1>Phonebook</h1>
        <ContactForm
          name={name}
          number={number}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.handleChange} />
        <ContactList contacts={contacts} filter={filter} onDelete={this.handleDelete} />
      </div>
    );
  }
}

export default App;