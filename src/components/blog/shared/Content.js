import React from 'react'
import styled from 'styled-components'

const Main = styled.main`
  width: 100%;
  margin-top: 100px;
  max-width: 960px;
  min-height: 800px;
  background-color: white;
`

const Content = ({ children }) => (
  <Main>
    {children}
  </Main>
)

export default Content
