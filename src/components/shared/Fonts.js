import styled, { css } from 'styled-components'

const BaseText = css`
  font-family: Roboto;
  color: white;
`
export const Title = styled.h1`
  ${BaseText}
  font-style: italic;
  font-weight: 900;
  font-size: 56px;
`
export const Description = styled.p`
  ${BaseText}
  font-weight: 300;
  font-size: 14px;
`
