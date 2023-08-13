import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { Title } from './App.styled';
import { useSelector } from 'react-redux';

export default function App() {
  let contacts = useSelector(state => state.contacts);
  let filter = useSelector(state => state.filter);

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

// import { useState, useEffect } from 'react';
// import contactList from './data/contacts.json';
// import ContactForm from './ContactForm/ContactForm';
// import Filter from './Filter/Filter';
// import ContactList from './ContactList/ContactList';
// import { Title } from './App.styled';

// export default function App() {
//   const [contacts, setContacts] = useState();
//   const [filter, setFilter] = useState('');

//   const ADDED_CONTACTS = 'addedContacts';

//   useEffect(() => {
//     let savedContacts = localStorage.getItem(ADDED_CONTACTS);
//     if (savedContacts) {
//       savedContacts = JSON.parse(savedContacts);
//       setContacts(savedContacts);
//     } else {
//       setContacts(contactList);
//     }
//   }, []);

//   useEffect(() => {
//     if (contacts) {
//       localStorage.setItem(ADDED_CONTACTS, JSON.stringify(contacts));
//     }
//   }, [contacts]);

//   const handleFilterChange = e => {
//     setFilter(e.target.value);
//   };

//   const handleAdd = newContact => {
//     if (
//       contacts.find(
//         contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
//       )
//     ) {
//       alert(`${newContact.name} is already in contacts`);
//     } else {
//       setContacts([newContact, ...contacts]);
//       // localStorage.setItem (ADDED_CONTACTS, JSON.stringify([newContact, ...contacts]))
//     }
//   };

//   const onDeleteContact = id => {
//     let indexToDelete = contacts.findIndex(contact => contact.id === id);
//     let newContacts = contacts;
//     newContacts.splice(indexToDelete, 1);
//     // localStorage.setItem (ADDED_CONTACTS, JSON.stringify(newContacts))
//     setContacts([...newContacts]);
//     // without ... React will not rerender component
//   };

//   return (
//     <div>
//       <Title>Phonebook</Title>
//       <ContactForm handleAdd={handleAdd} />

//       <Title>Contacts</Title>
//       <Filter handleFilterChange={handleFilterChange} value={filter} />
//       {contacts && (
//         <ContactList
//           list={contacts.filter(user =>
//             user.name.toLowerCase().includes(filter.toLowerCase())
//           )}
//           onDeleteContact={onDeleteContact}
//         />
//       )}
//     </div>
//   );
// }

