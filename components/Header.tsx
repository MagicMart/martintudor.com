/* eslint-disable react/no-unknown-property */
import Nav from './Nav'

export default function Header() {
  return (
    <header>
      <div className="logo-container">
        <div className="logo"></div>
        <div className="logo-text">
          <h1>
            <span className="title">
              <a href="https://github.com/MagicMart">Martin Tudor</a>
            </span>
            <span className="subtitle">WEB DEVELOPER</span>
          </h1>
        </div>
      </div>
      <Nav />
      <style jsx>{`
        header {
          margin-bottom: 2rem;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
        }
        .logo-container {
          --size: 100px;
          display: flex;
          align-items: center;
          margin-bottom: 2rem;
        }
        .logo {
          width: var(--size);
          height: var(--size);
          background-image: var(--logo);
          background-size: var(--size);
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
          font-size: 0.65em;
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
