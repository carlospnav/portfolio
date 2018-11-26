import React from 'react'
import styled from 'styled-components'
import { Design, FormatRGBToGradient } from '../../utils'

const StyledBG = styled.div`
  min-height: 100vh;
  background: linear-gradient(to bottom, 
    ${FormatRGBToGradient(Design.colors.bgBlue)},
    ${FormatRGBToGradient(Design.colors.bgPurple)}
  );
`

const Background = ({ children }) =>
  <StyledBG>
    <div />
    {children}
  </StyledBG>

export default Background
