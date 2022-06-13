import Head from 'next/head';
import Link from 'next/link';

import { TextFieldCSS } from '../components/TextFieldCSS';

export default function FormCSS() {
  return (
    <div className="container">
      <Head>
        <title>CSS Only Form</title>
        <meta
          name="description"
          content="A form that provides a less than stellar experience"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <form method="post" action="/.netlify/functions/form-handler">
          <fieldset>
            <legend>Contact Info</legend>

            <TextFieldCSS
              label="First Name"
              id="first_name"
              name="user_first_name"
              placeholder="First Name*"
              type="text"
              error="Please enter your first name."
              required
            />

            <TextFieldCSS
              label="Last Name"
              id="last_name"
              name="user_last_name"
              placeholder="Last Name*"
              type="text"
              error="Please enter your last name."
              required
            />

            <TextFieldCSS
              label="Work Email"
              id="email"
              name="user_work_email"
              placeholder="Work Email*"
              type="email"
              error="Please enter a valid e-mail address."
              pattern="[a-z0-9.\-_]+@[a-z]+\.[a-z]{2,3}"
              required
            />
          </fieldset>

          <TextFieldCSS
            label="Message"
            id="msg"
            name="user_message"
            placeholder="Message"
            type="textarea"
            error="Please enter a message."
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
