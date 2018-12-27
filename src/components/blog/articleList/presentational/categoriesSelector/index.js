import React from 'react'
import styled from 'styled-components'
import Link from '../../../shared/Link'

const Selector = styled.nav`
  display: flex;
  margin-bottom: 15px;
`

const CategoriesSelector = (props) => (
  <Selector>
    <Link to='react' />
    <Link to='redux' />
  </Selector>
)

export default CategoriesSelector
