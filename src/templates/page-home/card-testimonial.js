import React from 'react'
import styled from 'styled-components'

const UnstyledTestimonial = ({
  className
}) => {
  return (
    <article className={className}>
      <h3>Hey there, I'm a little pony!</h3>
    </article>
  )
}

const Testimonial = styled(UnstyledTestimonial)`
  background: white;
  padding: ${props => props.theme.padding.small};
`

export default Testimonial