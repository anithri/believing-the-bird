import * as React from 'react'
import { Link } from 'gatsby'

export const detectUrl = p => p.startsWith('http')

export const LinkSummary = ({summary}) => {
  if (typeof summary !== 'string') return summary

  const parts = summary.split(' ')
  const urls = parts.filter(detectUrl)

  if (urls.length !== 1) return summary

  const urlIndex = parts.findIndex(detectUrl)
  const linkText = parts.slice(0, urlIndex).join(' ')
  const postText = parts.slice(urlIndex + 1, parts.length).join(' ')

  return (
      <span>
        <Link to={urls[0]}>{linkText}</Link>
        {postText}
      </span>
  )


}

export const ImageText = ({summary, html}) =>
    (summary && html) ?
        (<HtmlText html={html} />) :
        (<SummaryText summary={summary} />)


export const HtmlText = ({html}) =>
    html && (<section dangerouslySetInnerHTML={{__html: html}} />)

export const SummaryText =
    ({summary}) => summary && (<p><LinkSummary summary={summary} /></p>)
