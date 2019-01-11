import React from 'react'
import styled from 'styled-components'

const data = {
  brands: [
    'Brooks',
    'New Balance',
    'Saucony',
    'Mizuno',
    'Hoka',
    'Altra',
    'Nike'
  ]
}

const BrandList = styled.ul`
  display: inline-block;
  padding-bottom: ${props => props.theme.padding.small};
`

const Brand = styled.li`
  display: inline-block;
  margin: ${props => props.theme.padding.small};
  margin-top: ${props => props.theme.padding.small};
  margin-bottom: 0;
  font-size: ${props => props.theme.heading.tertiary.size};
  font-weight: ${props => props.theme.heading.tertiary.weight};
  color: ${props => props.theme.color.grey.lighten};
`

const brands = data.brands.map(brand => <Brand key={brand}>{brand}</Brand>)

const ShopLink = styled.a`
  border-bottom: 2px dotted ${props => props.theme.color.lighten};
  cursor: pointer;
  
  :hover {
    color: ${props => props.theme.color.grey.medium};
  }
`

brands.push(
  <Brand key='cta'>
    <ShopLink>Shop Now</ShopLink>
  </Brand>
)

const UnstyledBrandLogoBar = ({
  className
}) => {
  return (
    <div id='brand-logo-bar' className={className}>
      <BrandList>
        {brands}
      </BrandList>
    </div>
  )
}

const BrandLogoBar = styled(UnstyledBrandLogoBar)`
  background: ${props => props.theme.color.grey.lighter};
  text-align: center;
`

export default BrandLogoBar