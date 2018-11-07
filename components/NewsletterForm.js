import React from 'react';
import { Formik } from 'formik';

const SCRIPT_URL =
  'https://script.google.com/a/synadia.com/macros/s/AKfycbw_7yaqcnWQJRI3AJ5hkwLTBrKYPXPS2s_tWMfzqyTG1k4tzH4/exec';

export default class NewsletterForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Formik
          initialValues={{ email: '' }}
          validate={values => {
            let errors = {};
            if (!values.email) {
              errors.email = 'Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            fetch(SCRIPT_URL, {
              method: 'POST',
              mode: 'no-cors',
              body: JSON.stringify(values),
              headers: {
                'Content-Type': 'application/json'
              }
            }).then(() => {
              setSubmitting(false);
              alert('Thanks for subscribing!');
            });
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleSubmit,
            handleBlur,
            isSubmitting
          }) => (
            <form onSubmit={handleSubmit} className="gform">
              <div className="input__wrapper">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <span className="error">
                  {errors.email && touched.email && errors.email}
                </span>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="button"
                data-text="Submit"
              >
                Submit
              </button>
            </form>
          )}
        </Formik>
      </React.Fragment>
    );
  }
}
