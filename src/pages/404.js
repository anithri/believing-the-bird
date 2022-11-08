import * as React from 'react'
import { Layout } from 'components'

const NotFoundPage = () => {
  return (
      <Layout>
        <h2 style={{textAlign: 'center'}}>Page not found</h2>
        <p>
          Sorry 😔, we couldn’t find what you were looking for.
        </p>
      </Layout>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
