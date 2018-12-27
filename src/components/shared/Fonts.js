import styled, { css } from 'styled-components'

const BaseText = css`
  font-family: Roboto;
  color: white;
`
export const Title = styled.h1`
  ${BaseText}
  font-style: italic;
  font-weight: 900;
  font-size: 80px;
  margin: 0;
`
export const Description = styled.p`
  ${BaseText}
  font-weight: 300;
  font-size: 15px;
`

export const LinkText = css`
  ${BaseText}
  font-size: 9px;
  font-weight: 500;
  margin-right: 20px;
`
