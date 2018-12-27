import React from 'react'
import styled from 'styled-components'
import { Label } from '../../../../shared/Fonts'

const Arrow = styled(Label)`
  font-size: 9px;
  line-height: 10px;
`
const LeftArrow = () => (
  <Arrow>{'<--'}</Arrow>
)

export default LeftArrow
