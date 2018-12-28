import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { MenuText } from '../../../utils/design/fonts'
import PropTypes from 'prop-types'

const BaseLink = styled(NavLink)`
  ${MenuText}
  text-decoration: none;
  padding-bottom: 2px;
`

const Link = ({ to }) => (
  <BaseLink
    to={to}
    strict
    exact
    activeStyle={{
      borderBottom: '1px solid white',
      fontWeight: 900
    }}
    isActive={(_, { pathname }) => pathname === `/${to}`}
  >
    {to.toUpperCase()}
  </BaseLink>
)

Link.propTypes = {
  to: PropTypes.string.isRequired
}

export default Link
