import Head from 'next/head'

export default function MyHead({ title }: { title: string }) {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  )
}
