import React from 'react'
import styled from 'styled-components'

import colors from '../../utils/design/colors'
import Stripes from './stripes'

const StyledBG = styled.div`
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  padding: 40px;
  background: linear-gradient(to bottom, 
    ${colors.bgBlue},
    ${colors.bgPurple}
  );
`

const Background = ({ children }) =>
  <StyledBG>
    <Stripes />
    {children}
  </StyledBG>

export default Background
