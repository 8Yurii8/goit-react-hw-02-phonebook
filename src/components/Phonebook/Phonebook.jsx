import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { Filter } from './filter';

import css from './style.module.css';

import ContactList from './ContactList';

import ContactForm from './ContactForm';

class Phonebook extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };

  handleAddContact = (values, actions) => {
    if (this.isContactExist(values.name, values.number)) {
      alert(
        `name ${values.name} number ${values.number} is already in contacts`
      );
      return;
    }

    const newContact = {
      id: Date.now(),
      name: values.name,
      number: values.number,
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
    actions.resetForm();
  };

  isContactExist = (name, number) => {
    return this.state.contacts.some(
      contact => contact.name === name && contact.number === number
    );
  };

  changeFilter = event => {
    this.setState({ filter: event.target.value });
  };

  deleteContacts = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <div className={css.section}>
        <h1>Phonebook</h1>
        <ContactForm handleAddContact={this.handleAddContact} />
        {contacts.length > 0 ? (
          <div>
            <h2>Contacts</h2>
            <Filter value={filter} onChange={this.changeFilter} />
            <ContactList
              contacts={contacts}
              filter={filter}
              onDeleteContact={id => this.deleteContacts(id)}
            />
          </div>
        ) : (
          <p>No contacts yet.</p>
        )}
      </div>
    );
  }
}

export default Phonebook;

Phonebook.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      number: PropTypes.number,
    })
  ),
  filter: PropTypes.string,
  handleAddContact: PropTypes.func,
  deleteContacts: PropTypes.func,
  changeFilter: PropTypes.func,
};

Phonebook.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  filter: PropTypes.string,
  handleAddContact: PropTypes.func,
  onDeleteContact: PropTypes.func,
  changeFilter: PropTypes.func,
};
