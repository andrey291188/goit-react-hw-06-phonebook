import { useDispatch, useSelector } from 'react-redux';
import css from './contactlist.module.css';
import PropTypes from 'prop-types';
import { deleteContact } from 'store/phonebook/phoneBookReducer';
import { useMemo } from 'react';

const ContactList = () => {
  const { contactList: contacts } = useSelector(state => state.phoneBook);
  const { filter } = useSelector(state => state.filter)

  const getVisibleContacts = useMemo(() => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }, [contacts, filter]);

const dispatch = useDispatch();
  const deleteContactHandler = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ul className={css.list}>
      {getVisibleContacts.map(({ id, name, number }) => (
        <li key={id} className={css.item}>
          <p className={css.name}>{name}:</p>
          <p className={css.phone}>{number}</p>
          <button
            onClick={() => deleteContactHandler(id)}
            className={css.button_delet}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
