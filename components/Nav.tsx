import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Nav() {
  const router = useRouter()
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a className={router.pathname == '/' ? 'active' : ''}>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a className={router.pathname == '/about' ? 'active' : ''}>About</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a className={router.pathname == '/contact' ? 'active' : ''}>
              Contact
            </a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a className={/blog*/.test(router.pathname) ? 'active' : ''}>
              Blog
            </a>
          </Link>
        </li>
      </ul>
      <style jsx>{`
        nav {
          width: 100%;
        }
        ul {
          display: flex;
          flex-wrap: wrap;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        li {
          margin-left: 1.5rem;
          margin-bottom: 1rem;
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
        .active {
          color: red;
        }
      `}</style>
    </nav>
  )
}
