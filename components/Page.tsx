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
      </footer>
    </>
  )
}
