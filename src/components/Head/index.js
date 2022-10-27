import * as React from 'react'
import {useSiteMetadata} from 'hooks'

export const Head = ({ _location, _params, data, _pageContext }) => {
  const {title} = useSiteMetadata()
  return (
      <>
        <title>{title} - {data.page.title}</title>
      </>
  )
}
