import React from 'react'
import styled from 'styled-components'

const Main = styled.main`
  min-height: 120px;
  background-color: white;

  @media all and (min-width: 700px) {
    margin-top: 50px;
  }
`

const Content = ({ children }) => (
  <Main>
    {children}
  </Main>
)

export default Content
