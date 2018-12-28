import React from 'react'
import styled from 'styled-components'
import Link from '../../../shared/Link'
import { Label } from '../../../../shared/Fonts'
import LeftArrow from '../leftArrow'

const Selector = styled.nav`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 15px;
`
const Links = styled.div`
  flex: 1;
  display: flex;
`

const CategoriesSelector = () => (
  <Selector>
    <Links>
      <Link to='react' />
      <Link to='redux' />
    </Links>
    <LeftArrow />
    <Label>{`CATEGORIES`}</Label>
  </Selector>
)

export default CategoriesSelector
