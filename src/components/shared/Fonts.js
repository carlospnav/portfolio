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

export const LinkIdentifierText = css`
  ${BaseText}
  font-size: 9px;
  font-weight: 300;
`

export const LinkText = css`
  ${LinkIdentifierText}
  margin-right: 20px;
`

export const Label = styled.span`
  ${LinkIdentifierText}
  font-size: 8px;
  margin-left: 10px;
`
