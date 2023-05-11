import React from 'react';

import css from './style.module.css';

function ContactList(props) {
  const { contacts, filter, onDeleteContact } = props;
  const filterCor = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterCor)
  );

  return (
    <ul>
      {visibleContacts.map(contact => (
        <li key={contact.id} className={css.list}>
          {`${contact.name}: ${contact.number}  `}
          <button onClick={() => onDeleteContact(contact.id)}>delete</button>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
