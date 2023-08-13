import PropTypes from 'prop-types';
import { List, ListItem, Button, ContactDetail } from './ContactList.styled';
import { useDispatch } from 'react-redux';
import { deleteById } from 'redux/contactsSlice';

const ContactList = ({ list }) => {
  let dispatch = useDispatch();

  const onDeleteContact = id => {
    dispatch(deleteById(id));
    // let indexToDelete = contacts.findIndex(contact => contact.id === id);
    // let newContacts = contacts;
    // newContacts.splice(indexToDelete, 1);
    // localStorage.setItem (ADDED_CONTACTS, JSON.stringify(newContacts))
    // setContacts([...newContacts]);
    // without ... React will not rerender component
  };

  return (
    <List>
      {list.map(({ id, name, number }) => (
        <ListItem key={id}>
          <ContactDetail>{name}</ContactDetail>
          <ContactDetail>{number}</ContactDetail>
          <Button type="button" onClick={() => onDeleteContact(id)}>
            Delete contact
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default ContactList;

ContactList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
