import Head from 'next/head'

const ContactForm = (
  <form
    name="contact"
    method="POST"
    data-netlify="true"
    action="contact/?success=true"
  >
    <input type="hidden" name="form-name" value="contact" />
    <p>
      <label htmlFor="name">
        Name: <input type="text" name="name" />
      </label>
    </p>
    <p>
      <label htmlFor="email">
        Email: <input type="email" name="email" />
      </label>
    </p>
    <p>
      <label htmlFor="message">
        Message: <textarea name="message"></textarea>
      </label>
    </p>
    <p>
      <button type="submit">Send</button>
    </p>
  </form>
)

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | martintudor.com</title>
      </Head>
      {ContactForm}
      <style jsx>{`
        input {
          width: 100%;
          height: 3rem;
        }
        textarea {
          width: 100%;
        }
        input,
        textarea {
          font-size: 2rem;
        }
        button {
          font-size: 4rem;
        }
      `}</style>
    </>
  )
}
