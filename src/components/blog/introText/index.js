import React from 'react'
import styled from 'styled-components'

import {
  Title as BaseTitle,
  Description as BaseDescription
} from '../../shared/Fonts'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 200px 20px;
  max-width: 770px;
`

const Title = styled(BaseTitle)`
  text-align: center;
`

const Description = styled(BaseDescription)`
  max-width: 500px;
  margin: 0;
`

const IntroText = () => (
  <Wrapper>
    <Title>This is a mock blog application built as a tech playground.</Title>
    {/* <h4>By Carlos Navarrete</h4> */}
    <Description>I created this website to practice new technologies. The current goal is to use React, Redux, Redux-Saga, React-Router, Styled-Components, NodeJs, Express, Mongoose and MongoDB to build the application. Pick one of the articles to read the details and to be able to create comments for it.</Description>
  </Wrapper>
)

export default IntroText
