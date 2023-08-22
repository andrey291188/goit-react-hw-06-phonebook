import ContactForm from './ContactForm/ContactForm.jsx';
import ContactList from './ContactList/ContactList.jsx';
import FilterList from './FilterList/FilterList.jsx';

const App = () => {
 
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <FilterList />
      <ContactList
      />
    </div>
  );
};

export default App;
