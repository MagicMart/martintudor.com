import Head from 'next/head'
import Image from 'next/image'
import data from '../data.json'

export default function Home() {
  // const myLoader = ({ src, width }: { src: string; width: number }) => {
  //   return `https://res.cloudinary.com/dibbxe0wt/image/upload/w_${width}/v1630868963/martintudordotcom/${src}`
  // }
  return (
    <>
      <Head>
        <title>Home | martintudor.com</title>
      </Head>
      <div>
        <ul>
          {data.map((card) => {
            return (
              <li key={card.title} className="card">
                <div className="image-container">
                  <Image
                    src={`martintudordotcom/${card.img}`}
                    alt=""
                    layout="fill"
                    quality={75}
                    placeholder="blur"
                    blurDataURL={`https://res.cloudinary.com/dibbxe0wt/image/upload/c_scale,f_auto,w_10/v1640632217/martintudordotcom/${card.img}`}
                  />
                </div>
                <a href={card.link}>
                  <div className="card__details">
                    <h2>
                      {card.title}
                      <span>&#128279;</span>
                    </h2>
                  </div>
                </a>
              </li>
            )
          })}
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
            border: 2px solid green;
            /* border-radius: 4px; */
            margin: 0.5rem;
          }

          .image-container {
            position: relative;
            width: 196px;
            height: 147px;
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
        `}</style>
      </div>
    </>
  )
}
