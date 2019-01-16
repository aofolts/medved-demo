import React from 'react'
import styled from 'styled-components'
import {Heading,Paragraph} from 'components/type'

const UnstyledTestimonial = ({
  className,
  entry
}) => {
  return (
    <article className={className}>
      <Heading scheme='reverse'>{entry.headline}</Heading>
      <Paragraph scheme='reverse'>{entry.quote}</Paragraph>
    </article>
  )
}

const Testimonial = styled(UnstyledTestimonial)`
  display: block;
`

export default Testimonial