import React from 'react'
import styled from 'styled-components'
import Testimonial from './card-testimonial'

const testimonialTemplate = {
  headline: `Such great and knowledgeable staff. `,
  quote: `My wife has been preaching the benefits of a properly fitted shoe for years and I’d roll my eyes and just order the deal of the week from Amazon. For my birthday this year she took me in and (I’ll even show her I said this) … I was wrong.`,
  author: `John Smith`,
  source: `Facebook Review`
}

const data = {
  testimonials: [
    testimonialTemplate,
    testimonialTemplate,
    testimonialTemplate,
    testimonialTemplate,
    testimonialTemplate,
    testimonialTemplate,
    testimonialTemplate,
    testimonialTemplate
  ],
  secondaryTestimonials: [
    testimonialTemplate,
    testimonialTemplate,
    testimonialTemplate,
    testimonialTemplate,
    testimonialTemplate,
    testimonialTemplate,
    testimonialTemplate,
    testimonialTemplate
  ]
}

const TestimonialsContainer = styled.div`
  display: block;
`

const TestimonialsList = styled.ul`
  display: block;
  width: 100%;
`

const TestimonialItem = styled.li`
  display: inline-block;
  margin: ${props => props.theme.padding.medium};
`

const testimonialsItems = data.testimonials.map(entry => (
  <TestimonialItem key={entry.key}>
    <Testimonial entry={entry}/>
  </TestimonialItem>
))

const UnstyledTestimonialsSection = ({
  className
}) => {
  return (
    <section id='testimonials' className={className}>
      <TestimonialsContainer>
        <TestimonialsList>
          {testimonialsItems}
        </TestimonialsList>
      </TestimonialsContainer>
    </section>
  )
}

const TestimonialsSection = styled(UnstyledTestimonialsSection)`
  background: #719DE3;
  height: ${props => props.theme.columns(6)};
  display: flex;
  align-items: center;
`

export default TestimonialsSection