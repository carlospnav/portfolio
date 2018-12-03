import React from 'react'
import styled from 'styled-components'

import {
  Title as BaseTitle,
  Description as BaseDescription
} from '../../shared/Fonts'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  max-width: 960px;
`

const Title = styled(BaseTitle)`
  text-align: left;
`

const Description = styled(BaseDescription)`
  max-width: 450px;
  margin: 60px 0 0 0;
  align-self: flex-end;
`

const Name = styled(BaseDescription)`
  position: absolute;
  font-style: italic;
  font-weight: 100;
  bottom: 160px;
  left: 400px;
`

const IntroText = () => (
  <Wrapper>
    <Title>This is a mock blog application built to try out new techs.</Title>
    <Name>By Carlos Navarrete</Name>
    <Description>I created this website to practice new technologies. The current goal is to use React, Redux, Redux-Saga, React-Router, Styled-Components, NodeJs, Express, Mongoose and MongoDB to build the application. Pick one of the articles to read the details and to be able to create comments for it.</Description>
  </Wrapper>
)

export default IntroText
