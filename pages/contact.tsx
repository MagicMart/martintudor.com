import Head from 'next/head'
import { useRouter } from 'next/router'

const ContactForm = (
  <form
    name="contact"
    method="POST"
    data-netlify="true"
    action="contact/?success=true"
    data-netlify-honeypot="bot-field"
  >
    <input type="hidden" name="form-name" value="contact" />
    <p hidden>
      <label>
        Don’t fill this out: <input name="bot-field" />
      </label>
    </p>
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
)

export default function Contact() {
  const router = useRouter()
  const confirmationScreenVisible =
    router.query?.success && router.query.success === 'true'
  const formVisible = !confirmationScreenVisible

  const ConfirmationMessage = (
    <>
      <p>Thank you for submitting this form.</p>
    </>
  )

  return (
    <>
      <Head>
        <title>Contact | martintudor.com</title>
      </Head>
      {formVisible ? ContactForm : ConfirmationMessage}
    </>
  )
}
