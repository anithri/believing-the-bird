import * as React from 'react'
import { FeaturedImage } from '../FeaturedImage'

export const ImageAndFrame = ({className, onClick, image, title, children}) => (
    <div className={className} onClick={onClick}>
      <FeaturedImage image={image} alt={title} />
      {children}
    </div>
)
