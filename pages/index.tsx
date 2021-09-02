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

export default function Home({ cardData }: { cardData: any }) {
  return (
    <>
      <Head>
        <title>Home | martintudor.com</title>
      </Head>
      <div>
        <p>
          Get started by editing <code>pages/index.js</code>
        </p>

        <ul>
          {cardData.map((card: any) => (
            <li key={card.title} className="card">
              <Image
                src={card.img}
                alt={card.alt}
                width={196}
                height={160}
                objectFit="cover"
              />
              <div className="card__details">
                <h3 className="text-center">{card.title}</h3>
              </div>
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
          .card {
            border: 1px solid #a5df8e;
            border-radius: 4px;
            margin: 0.5rem;
          }
        `}</style>
      </div>
    </>
  )
}
