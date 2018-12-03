import React from 'react'
import styled from 'styled-components'

import { FormatRGBToGradient } from '../../utils'
import { Design } from '../../utils/design'
import Stripes from './stripes'

const StyledBG = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  padding: 40px;
  background: linear-gradient(to bottom, 
    ${FormatRGBToGradient(Design.colors.bgBlue)},
    ${FormatRGBToGradient(Design.colors.bgPurple)}
  );
`

const Background = ({ children }) =>
  <StyledBG>
    <Stripes />
    {children}
  </StyledBG>

export default Background
