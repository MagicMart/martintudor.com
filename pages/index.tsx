import Head from 'next/head'
import Image from 'next/image'
import { GetStaticProps } from 'next'
import data from '../data.json'

export async function getStaticProps(context: GetStaticProps) {
  const cardData = data

  return {
    props: { cardData }, // will be passed to the page component as props
  }
}

// const myLoader = ({ src, width, quality }) => {
//   return `https://martintudor.net/images/${src}?w=${width}&q=${quality || 75}`
// }

export default function Home({ cardData }: { cardData: any }) {
  return (
    <>
      <Head>
        <title>Home | martintudor.com</title>
      </Head>
      <div>
        <ul>
          {cardData.map((card: any) => (
            <li key={card.title} className="card">
              <img
                src={card.img}
                alt=""
                width="196"
                height="160"
                // objectFit="cover"
              />
              <a href={card.link}>
                <div className="card__details">
                  <h2>{card.title}</h2>
                </div>
              </a>
            </li>
          ))}
        </ul>
        <style jsx>{`
          ul {
            list-style: none;
            margin: 0;
            padding: 0;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
          }
          li {
            margin: 0;
          }

          .card {
            background-color: var(--background-color);
            background-image: var(--background-image);
            border: 2px solid var(--background-color);
            /* border-radius: 4px; */
            margin: 0.5rem;
          }

          .card__details {
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: var(--paper-white);
            width: 100%;
            height: 4rem;
            margin: 0;
            font-family: 'Ariel', sans-serif;
          }

          .card__details:hover {
            background-color: transparent;
          }

          h2 {
            margin: 0;
            padding: 0;
            background-color: white;
            font-size: 1.6rem;
            font-weight: bold;
            letter-spacing: 0.1rem;
            padding: 0.1em 0.3em;
          }
          a {
            text-decoration: none;
            color: #383535;
          }
          img {
            width: 196px;
            height: 160px;
            object-fit: cover;
          }
        `}</style>
      </div>
    </>
  )
}
