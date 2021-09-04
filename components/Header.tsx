import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <div className="logo-container">
        <div className="logo"></div>
        <div className="logo-text">
          <h1>
            <span className="title">
              <Link href="/">
                <a>Martin Tudor</a>
              </Link>
            </span>
            <span className="subtitle">Web Developer</span>
          </h1>
        </div>
      </div>
      <style jsx>{`
        header {
          margin-bottom: 2rem;
        }
        .logo-container {
          --size: 100px;
          display: flex;
          align-items: center;
          width: fit-content;
          /* outline: 1px solid var(--purple); */
        }
        .logo {
          width: var(--size);
          height: var(--size);
          background-image: var(--logo);
        }
        .logo-text {
          padding: 1rem;
        }
        .title {
          grid-area: title;
        }
        .subtitle {
          grid-area: subtitle;
        }
        h1 {
          display: grid;
          grid-template-columns: 1fr;
          grid-template-areas:
            'title'
            'subtitle';
          justify-items: center;
          align-items: center;
          font-size: 2rem;
          font-weight: bold;
        }

        .subtitle {
          font-size: 0.8em;
          color: #fdfaf9;
          background-color: #662323;
          transform: skew(-10deg);
          padding: 0.5rem;
        }
        a {
          text-decoration: none;
          color: #4a4a4a;
        }
      `}</style>
    </header>
  )
}
