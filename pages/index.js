import React from 'react'
import Link from 'next/link'

export default function Index () {
  return (
    <>
      <h1>Index</h1>
      <ul>
        <li>
          <Link href="/hi/[lang]?lang=en" as="/hello">
            <a>Go to /hello which rewrites to /hi/[lang]?lang=en</a>
          </Link>
        </li>
        <li>
          <Link href="/hi/[lang]?lang=es" as="/hola">
            <a>Go to /hola which rewrites to /hi/[lang]?lang=es</a>
          </Link>
        </li>
        <li>
          <Link href="/hi/[lang]?lang=zh" as="/ni-hao">
            <a>Go to /ni-hao which rewrites to /hi/[lang]?lang=zh</a>
          </Link>
        </li>
      </ul>
    </>
  )
}
