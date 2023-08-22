import { createSlice, nanoid } from '@reduxjs/toolkit';
import { initialState } from './initialState';

const phoneBookReducer = createSlice({
  name: 'phonebook',
  initialState: initialState.phonebook,
  reducers: {
    createContact: (state, action) => {
      const { name, number } = action.payload;
      state.contactList.push({ id: nanoid(), name, number });
    },

    deleteContact: (state, action) => {
      return {
        ...state,
        contactList: state.contactList.filter(
          contact => contact.id !== action.payload
        ),
      };
    },

  },
});

export const { createContact, deleteContact } = phoneBookReducer.actions;

export default phoneBookReducer.reducer;
