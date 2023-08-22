import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import css from './contactform.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { createContact } from 'store/phonebook/phoneBookReducer';


const ContactForm = () => {
  const { contactList: contacts } = useSelector(state => state.phoneBook);
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

  const handleSubmit = (values, {resetForm}) => {
    addContact (values);
    resetForm()
  };

    const schema = yup.object().shape({
      name: yup.string().min(2).required(),
      number: yup.number().min(6).required(),
    })
    
    return (
      <Formik initialValues={{name: "", number: ""}} validationSchema={schema} onSubmit={handleSubmit}>
        <Form className={css.form_style}>
          <label htmlFor="name">
          <p className={css.nameInput}>Enter your Name</p>
            <Field
              type="text"
              name="name"
              className={css.form_input}
            />
            <ErrorMessage name='name' component="div"/>
          </label>
          <label htmlFor="number">
          <p className={css.nameInput}>Enter your Phone</p>
            <Field
              type="text"
              name="number"
              className={css.form_input}
            />
            <ErrorMessage name='number' component="div"/>
          </label>
          <button type="submit" className={css.button_create}>
            Add contacts
          </button>
        </Form>
      </Formik>
    );
  }

export default ContactForm;

