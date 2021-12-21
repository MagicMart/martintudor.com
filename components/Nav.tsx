import Link from 'next/link'

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
      </ul>
      <style jsx>{`
        nav {
          width: 50%;
        }
        ul {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        li {
          margin-left: 2rem;
        }
        a:hover {
          text-decoration: underline;
        }

        a {
          font-size: 2rem;
          font-weight: bold;
          color: var(--text-color);
          text-decoration: none;
        }
      `}</style>
    </nav>
  )
}
