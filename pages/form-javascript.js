import Head from 'next/head';
import { useRef, useEffect, useState } from 'react';

import {
  validateForm,
  handleInvalidField,
  handleFieldBlur,
  handleFieldInput,
} from '../helpers/validation';

import { TextFieldJavascript } from '../components/TextFieldJavascript';
import Link from 'next/link';

export default function FormJavascript() {
  const [visitedFields, setVisitedFields] = useState([]);

  function changeHandler(e) {
    return handleFieldInput(e, visitedFields);
  }

  return (
    <div className="container">
      <Head>
        <title>Javascript Form</title>
        <meta
          name="description"
          content="A form that excludes non-JS people!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <form onSubmit={validateForm} noValidate>
          <fieldset>
            <legend>Contact Info</legend>

            <TextFieldJavascript
              label="First Name"
              id="first_name"
              name="user_first_name"
              placeholder="First Name*"
              type="text"
              error="Please enter your first name."
              onInvalid={(e) =>
                handleInvalidField(e, visitedFields, setVisitedFields)
              }
              onBlur={(e) =>
                handleFieldBlur(e, visitedFields, setVisitedFields)
              }
              onChange={(e) => handleFieldInput(e, visitedFields)}
              required
            />

            <TextFieldJavascript
              label="Last Name"
              id="last_name"
              name="user_last_name"
              placeholder="Last Name*"
              type="text"
              error="Please enter your last name."
              onInvalid={(e) =>
                handleInvalidField(e, visitedFields, setVisitedFields)
              }
              onBlur={(e) =>
                handleFieldBlur(e, visitedFields, setVisitedFields)
              }
              onChange={changeHandler}
              required
            />

            <TextFieldJavascript
              label="Work Email"
              id="email"
              name="user_work_email"
              placeholder="Work Email*"
              type="email"
              error="Please enter a valid e-mail address."
              onInvalid={(e) =>
                handleInvalidField(e, visitedFields, setVisitedFields)
              }
              onBlur={(e) =>
                handleFieldBlur(e, visitedFields, setVisitedFields)
              }
              onChange={changeHandler}
              pattern="[a-z0-9.\-_]+@[a-z]+\.[a-z]{2,3}"
              required
            />
          </fieldset>

          <TextFieldJavascript
            label="Message"
            id="msg"
            name="user_message"
            placeholder="Message"
            type="textarea"
            error="Please enter a message."
            onInvalid={(e) =>
              handleInvalidField(e, visitedFields, setVisitedFields)
            }
            onBlur={(e) => handleFieldBlur(e, visitedFields, setVisitedFields)}
            onChange={(e) => handleFieldInput(e, visitedFields)}
            required
          />

          <small>
            For information about our privacy practices and commitment to
            protecting your privacy, please review our{' '}
            <Link href="/thanks">Privacy Policy.</Link>.
          </small>

          <button className="contact-form__button" type="submit">
            Send Message
          </button>
        </form>
      </main>
    </div>
  );
}
