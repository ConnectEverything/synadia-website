import React from 'react';
import { Formik } from 'formik';
import AnimateLoad from './AnimateLoad';

export default class NewsletterForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      successfullySubmitted: false
    };
  }

  render() {
    return (
      <div className="wrapper">
        {this.state.successfullySubmitted && (
          <AnimateLoad delay={650}>
            <h4 className={`${this.props.centered && 'centered'}`}>
              {this.props.thanksMessage}
            </h4>
          </AnimateLoad>
        )}
        <h5
          className={`${this.props.centered && 'centered'} ${this.state
            .successfullySubmitted && 'hidden'}`}
        >
          {this.props.title}
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
            setSubmitting(false);
            this.setState({ successfullySubmitted: true });

            fetch(this.props.url, {
              method: 'POST',
              mode: 'no-cors',
              body: JSON.stringify(values),
              headers: {
                'Content-Type': 'application/json'
              }
            })
              .then(() => {
                setSubmitting(false);
                this.setState({ successfullySubmitted: true });
              })
              .catch(error => console.error('Error:', error));
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
          .wrapper {
            position: relative;
          }

          h4 {
            position: absolute;
            left: 0;
          }

          h4.centered {
            left: 50%;
            transform: translateX(-50%);
          }

          h5 {
            text-align: left;
            transition: opacity 600ms ease;
          }

          h5.centered {
            text-align: center;
          }
          h5.hidden {
            opacity: 0;
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
            transition: opacity 600ms ease-in-out, transform 200ms ease 600ms;
          }

          .submitted {
            opacity: 0;
            transform: scaleY(0);
          }

          @media (min-width: 895px) {
            .error:not(.hidden) + .button {
              transform: none;
            }
          }
        `}</style>
      </div>
    );
  }
}
