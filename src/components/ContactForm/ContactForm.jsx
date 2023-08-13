import { nanoid } from 'nanoid';
import { Formik } from 'formik';
import { Container, Button } from './ContactForm.styled';
import { setContact } from 'redux/contactsSlice';
import { useDispatch } from 'react-redux';

export default function ContactForm() {
  let dispatch = useDispatch();

  const addContact = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    dispatch(setContact(newContact));
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validate={values => {
        const errors = {};
        if (!values.name) {
          errors.name = 'Required';
        } else if (
          !/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/i.test(
            values.name
          )
        ) {
          errors.name = 'Invalid Name';
        }
        if (!values.number) {
          errors.number = 'Required';
        } else if (
          !/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/i.test(
            values.number
          )
        ) {
          errors.number = 'Invalid Phonenumber';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        addContact(values);
        setSubmitting(true);
        resetForm();
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          <Container>
            <p>Name</p>
            <input
              type="text"
              name="name"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={handleChange}
              value={values.name}
              onBlur={handleBlur}
            />
            {errors.name && touched.name && errors.name}
          </Container>

          <Container>
            <p>Number</p>
            <input
              type="tel"
              name="number"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={handleChange}
              value={values.number}
              onBlur={handleBlur}
            />
            {errors.number && touched.number && errors.number}
          </Container>

          <Button type="submit" disabled={isSubmitting}>
            Add contact
          </Button>
        </form>
      )}
    </Formik>
  );
}

// import { nanoid } from 'nanoid';
// import { Formik } from 'formik';
// import PropTypes from 'prop-types';
// import { Container, Button } from './ContactForm.styled';

// export default function ContactForm({ handleAdd }) {
//   const addContact = ({ name, number }) => {
//     const newContact = {
//       id: nanoid(),
//       name,
//       number,
//     };

//     handleAdd(newContact);
//   };

//   return (
//     <Formik
//       initialValues={{ name: '', number: '' }}
//       validate={values => {
//         const errors = {};
//         if (!values.name) {
//           errors.name = 'Required';
//         } else if (
//           !/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/i.test(
//             values.name
//           )
//         ) {
//           errors.name = 'Invalid Name';
//         }
//         if (!values.number) {
//           errors.number = 'Required';
//         } else if (
//           !/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/i.test(
//             values.number
//           )
//         ) {
//           errors.number = 'Invalid Phonenumber';
//         }
//         return errors;
//       }}
//       onSubmit={(values, { setSubmitting, resetForm }) => {
//         addContact(values);
//         setSubmitting(true);
//         resetForm();
//       }}
//     >
//       {({
//         values,
//         errors,
//         touched,
//         handleChange,
//         handleBlur,
//         handleSubmit,
//         isSubmitting,
//       }) => (
//         <form onSubmit={handleSubmit}>
//           <Container>
//             <p>Name</p>
//             <input
//               type="text"
//               name="name"
//               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//               required
//               onChange={handleChange}
//               value={values.name}
//               onBlur={handleBlur}
//             />
//             {errors.name && touched.name && errors.name}
//           </Container>

//           <Container>
//             <p>Number</p>
//             <input
//               type="tel"
//               name="number"
//               title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//               required
//               onChange={handleChange}
//               value={values.number}
//               onBlur={handleBlur}
//             />
//             {errors.number && touched.number && errors.number}
//           </Container>

//           <Button type="submit" disabled={isSubmitting}>
//             Add contact
//           </Button>
//         </form>
//       )}
//     </Formik>
//   );
// }

// ContactForm.propTypes = {
//   handleAdd: PropTypes.func.isRequired,
// };
