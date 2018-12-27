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
  align-items: flex-start;
  margin-top: 20px;
  max-width: 960px;

  @media all and (min-width: 700px) {
    margin-top: 20px;
  }
`

const Title = styled(BaseTitle)`
  text-align: left;
  font-size: 32px;

  @media all and (min-width: 500px) {
    font-size: 38px;
  }

  @media all and (min-width: 600px) {
    font-size: 42px;
  }

  @media all and (min-width: 700px) {
    font-size: 46px;
  }

  @media all and (min-width: 850px) {
    font-size: 52px;
  }
`

const Description = styled(BaseDescription)`
  max-width: 450px;
  margin: 35px 0 0 0;

  @media all and (min-width: 700px) {
    margin: 35px 0 0 0;
  }
`

const Name = styled(BaseDescription)`
  position: relative;
  font-size: 14px;
  font-weight: 100;
  margin: 20px 0 0 0;

  @media all and (min-width: 700px) {

  }
`

const IntroText = () => (
  <Wrapper>
    <Title>This is a mock blog application built to try out new techs.</Title>
    <Name>By Carlos Navarrete</Name>
    <Description>I created this website to practice new technologies. The current goal is to use React, Redux, Redux-Saga, React-Router, Styled-Components, NodeJs, Express, Mongoose and MongoDB to build the application. Pick one of the articles to read the details and to be able to create comments for it.</Description>
  </Wrapper>
)

export default IntroText
