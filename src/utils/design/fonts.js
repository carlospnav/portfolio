import styled, { css } from 'styled-components'
import colors from './colors'

const BaseText = css`
  font-family: Roboto;
  color: white;
  font-weight: 300;
  font-size: 15px;
  margin: 0;
`
const BaseMenu = css`
  ${BaseText}
  font-size: 9px;
`
export const Title = styled.h1`
  ${BaseText}
  font-style: italic;
  font-weight: 900;
  font-size: 80px;
`
export const Description = styled.p`
  ${BaseText}
`
export const MenuText = css`
  ${BaseMenu}
  margin-right: 20px;
`
export const Label = styled.span`
  ${BaseMenu}
  font-size: 8px;
  margin-left: 10px;
`

export const ArticleText = styled(Description)`
  color: ${colors.articleText};
  font-weight: 500;
`
export const ArticleTitle = styled(ArticleText)`
  font-size: 12px;
`
export const Author = styled(ArticleText)`
  line-height: 10px;
  font-size: 10px;
  font-style: italic;
`
