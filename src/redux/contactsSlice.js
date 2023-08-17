import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactList from '../components/data/contacts.json'
 
export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: contactList, filter: '' },
  reducers: {
    setContact(state, action) {
      let newContact = action.payload;
      if (
        state.contacts.find(
          contact =>
            contact.name.toLowerCase() === newContact.name.toLowerCase()
        )
      ) {
        alert(`${newContact.name} is already in contacts`);
      } else {
        state.contacts.push(newContact);
      }
    },
    update(state, action) {
      let id = action.payload.id;
      let index = state.contacts.findIndex(contact => contact.id === id);
      state.contacts[index] = action.payload;
    },
    deleteById(state, action) {
      let indexToDelete = state.contacts.findIndex(con => con.id === action.payload)
      state.contacts.splice(indexToDelete, 1)
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts']
};

export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { setContact, update, deleteById, setFilter } =
  contactsSlice.actions;

