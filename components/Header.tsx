import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <div className="logo-container">
        <div className="logo"></div>
        <div className="logo-text">
          <h1>
            <Link href="/">Martin Tudor</Link>
            <br />
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
          display: flex;
          justify-content: center;
          align-items: center;
          width: 15rem;
          height: var(--size);
          /* background-color: var(--purple); */
        }
        h1 {
          font-size: 2rem;
          font-weight: bold;
        }
        .subtitle {
          font-size: 0.8em;
          color: #aa7106;
          letter-spacing: 0.1em;
        }
      `}</style>
    </header>
  )
}
