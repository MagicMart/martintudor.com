import Head from 'next/head'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | martintudor.com</title>
      </Head>
      <form name="contact" method="POST" data-netlify="true">
        <p>
          <label>
            Name: <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Email: <input type="email" name="email" />
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name="message"></textarea>
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </>
  )
}
