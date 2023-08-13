import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { Title } from './App.styled';
import { useSelector } from 'react-redux';

export default function App() {
  let contacts = useSelector(state => state.contacts);
  let filter = useSelector(state => state.filter);

  // const ADDED_CONTACTS = 'addedContacts';

  // useEffect(() => {
  //   let savedContacts = localStorage.getItem(ADDED_CONTACTS);
  //   if (savedContacts) {
  //     savedContacts = JSON.parse(savedContacts);
  //     setContacts(savedContacts);
  //   } else {
  //     setContacts(contactList);
  //   }
  // }, []);

  // useEffect(() => {
  //   if (contacts) {
  //     localStorage.setItem(ADDED_CONTACTS, JSON.stringify(contacts));
  //   }
  // }, [contacts]);

  return (
    <div>
      <Title>Phonebook</Title>
      <ContactForm />
      <Title>Contacts</Title>
      <Filter />
      {contacts && (
        <ContactList
          list={contacts.filter(user =>
            user.name.toLowerCase().includes(filter.toLowerCase())
          )}
        />
      )}
    </div>
  );
}
