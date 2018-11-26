import React from 'react';
import { Formik } from 'formik';

export default class NewsletterForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      successfullySubmitted: false
    };
  }

  render() {
    return (
      <React.Fragment>
        <h5 className={this.props.centered && 'centered'}>
          {this.state.successfullySubmitted
            ? this.props.thanksMessage
            : this.props.title}
        </h5>
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
            fetch(this.props.url, {
              method: 'POST',
              mode: 'no-cors',
              body: JSON.stringify(values),
              headers: {
                'Content-Type': 'application/json'
              }
            }).then(() => {
              setSubmitting(false);
              this.setState({ successfullySubmitted: true });
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
            <form
              onSubmit={handleSubmit}
              className={
                this.state.successfullySubmitted ? 'gform submitted' : 'gform'
              }
            >
              <input
                type="email"
                name="email"
                className="form-item"
                placeholder="Enter your email address"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <div
                className={
                  errors.email ? 'form-item error' : 'form-item error hidden'
                }
              >
                {errors.email}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="form-item button"
                data-text="Submit"
              >
                Submit
              </button>
            </form>
          )}
        </Formik>
        <style jsx>{`
          h5 {
            text-align: left;
          }
          h5.centered {
            text-align: center;
          }
        `}</style>
        <style jsx global>{`
          .error {
            margin: 1em 10px;
            margin-bottom: 0;
            transform: scaleY(1);
            transform-origin: top center;
            transition: transform 300ms ease-in;
          }

          .error.hidden {
            transform: scaleY(0);
          }

          .error:not(.hidden) + .button {
            transition: all 300ms ease-in;
            transform: translateY(1em);
          }

          .gform {
            transition: transform 500ms ease, opacity 600ms ease;
          }

          .submitted {
            transform: scaleY(0);
            transform-origin: center top;
            opacity: 0;
          }

          @media (min-width: 895px) {
            .error:not(.hidden) + .button {
              transform: none;
            }
          }
        `}</style>
      </React.Fragment>
    );
  }
}
