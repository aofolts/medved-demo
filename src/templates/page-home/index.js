import React from 'react'
import Layout from 'components/layout'
import Hero from './hero'
import Intro from './section-intro'
import BrandLogoBar from 'components/brand-logo-bar'
import Services from './section-services'
import Reviews from './section-reviews'

const HomePage = ({
  data
}) => {
  return (
    <Layout>
      <div id='main'>
        <Hero/>
        <BrandLogoBar/>
        <Intro/>
        <Services/>
        <Reviews/>
      </div>
    </Layout>
  )
}

export default HomePage