import Image from 'next/image'
import Header from './Header'

export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <footer>
        <p>
          <a href="https://github.com/MagicMart">Martin Tudor</a>{' '}
          <span>&#169;</span> {new Date().getFullYear()}
        </p>
        <style jsx global>{`
          html {
            --purple: #dfdbe5;
            --paper-white: #e8e8e8;
            --background-color: #dfdbe5;
            --background-image: url(/logic.svg);
            --logo: url('data:image/png;base64,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');
            box-sizing: border-box;
            background: var(--purple);
            background-image: var(--background-image);
            display: block;
            height: 100%;
            max-width: 800px;
            margin: 20px auto;
            padding: 0;
            font-size: 10px;
          }

          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }

          body {
            background-color: var(--paper-white);
            min-height: 100vh;
            padding: 1rem;
            margin-top: 0;
            font-family: Verdana, Geneva, Tahoma, sans-serif;
            font-size: 1rem;
            letter-spacing: 0.1rem;
            color: #4a4a4a;
            text-rendering: optimizeLegibility;
          }

          h1,
          h2,
          h3 {
            font-size: 2rem;
          }

          p {
            font-size: 2rem;
            line-height: 1.5;
          }
          .text-center {
            text-align: center;
          }
          img {
            width: 100%;
          }
          footer {
            text-align: center;
          }
          .small {
            font-size: smaller;
          }

          /* 
Contact Form
*/
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

          time {
            font-size: 1.5rem;
            font-style: italic;
          }
        `}</style>
      </footer>
    </>
  )
}
