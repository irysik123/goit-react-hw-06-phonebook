import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { Title } from './App.styled';
import { useSelector } from 'react-redux';

export default function App() {
  let contacts = useSelector(state => state.contacts.contacts);
  let filter = useSelector(state => state.contacts.filter);

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
