import styled, { css } from 'styled-components'

const BaseText = css`
  font-family: Roboto;
  color: white;
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
export const Design = {
  colors: {
    bgBlue: {
      r: 56,
      g: 38,
      b: 151
    },
    bgPurple: {
      r: 100,
      g: 60,
      b: 170
    }
  },
  fonts: {
    Title,
    Description
  }
}
