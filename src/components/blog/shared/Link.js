import React from 'react'
import styled from 'styled-components'
import { NavLink, withRouter } from 'react-router-dom'
import { LinkText } from '../../shared/Fonts'

const BaseLink = styled(NavLink)`
  ${LinkText}
  text-decoration: none;
`

const Link = (props) => (
  <BaseLink
    {...props}
    strict
    exact
    activeStyle={{
      textDecoration: 'underline',
      fontWeight: 900
    }}
    isActive={(_, { pathname }) => pathname === `/${props.to}`}
  >
    {props.to.toUpperCase()}
  </BaseLink>
)

export default withRouter(Link)
