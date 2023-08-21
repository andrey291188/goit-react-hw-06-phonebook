import { useMemo } from 'react';
import ContactForm from './ContactForm/ContactForm.jsx';
import ContactList from './ContactList/ContactList.jsx';
import FilterList from './FilterList/FilterList.jsx';
import { useDispatch, useSelector } from 'react-redux';

import { createContact, deleteContact, filterContact } from 'store/phonebook/phoneBookReducer.js';

const App = () => {
  const { contactList: contacts } = useSelector(state => state.phoneBook);
  const { filter } = useSelector(state => state.phoneBook)
  const dispatch = useDispatch();

  const addContact = value => {
    const { name: nameProps, number: numberProps } = value;

    const includsName = contacts.find(
      ({ name, number }) =>
        name.toLowerCase() === nameProps.toLowerCase() || number === numberProps
    );

    if (includsName) {
      alert(`Name ${nameProps}, phone ${numberProps} is already in contacts`);
      return;
    }
    dispatch(createContact(value));
  };

  const changeFilter = e => {
    const filterValue = e.currentTarget.value;
    dispatch(filterContact(filterValue))
  };

  const getVisibleContacts = useMemo(() => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }, [contacts, filter]);

  const deleteContactHandler = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmitForm={addContact} />
      <h2>Contacts</h2>
      <FilterList value={filter} onChange={changeFilter} />
      <ContactList
        contacts={getVisibleContacts}
        onDeletContact={deleteContactHandler}
      />
    </div>
  );
};

export default App;
