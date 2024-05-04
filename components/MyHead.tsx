import Head from 'next/head'

export function MyHead({ title }: { title: string }) {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  )
}
