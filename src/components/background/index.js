import React from 'react'
import styled from 'styled-components'

import design from '../../utils/design'
import Stripes from './stripes'

const StyledBG = styled.div`
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  padding: 40px;
  background: linear-gradient(to bottom, 
    ${design.colors.bgBlue},
    ${design.colors.bgPurple}
  );
`

const Background = ({ children }) =>
  <StyledBG>
    <Stripes />
    {children}
  </StyledBG>

export default Background
