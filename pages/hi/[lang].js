import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Index () {
  const { query: { lang } } = useRouter()

  return (
    <>
      <h1>Hello in {lang}</h1>
      <Link href="/" as="/">
        <a>Back to index page</a>
      </Link>
    </>
  )
}

export async function getServerSideProps () {
  return {
    props: {}
  }
}
