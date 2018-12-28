import styled, { css } from 'styled-components'
import { FormatRGBToGradient } from '../index'

const BaseText = css`
  font-family: Roboto;
  color: white;
  margin: 0;
`
const Title = styled.h1`
  ${BaseText}
  font-style: italic;
  font-weight: 900;
  font-size: 80px;
  margin: 0;
`
const Description = styled.p`
  ${BaseText}
  font-weight: 300;
  font-size: 15px;
`
const rgbs = {
  bgBlue: {
    r: 56,
    g: 38,
    b: 151
  },
  bgPurple: {
    r: 100,
    g: 60,
    b: 170
  },
  articleBg: {
    r: 240,
    g: 240,
    b: 240
  },
  articleText: {
    r: 80,
    g: 80,
    b: 80
  },
  articleSeparator: {
    r: 160,
    g: 160,
    b: 160
  }
}

const colors = {
  bgBlue: FormatRGBToGradient(rgbs.bgBlue),
  bgPurple: FormatRGBToGradient(rgbs.bgPurple),
  articleBg: FormatRGBToGradient(rgbs.articleBg),
  articleText: FormatRGBToGradient(rgbs.articleText),
  articleSeparator: FormatRGBToGradient(rgbs.articleSeparator)
}

export default {
  colors,
  rgbs,
  fonts: {
    Title,
    Description
  }
}
