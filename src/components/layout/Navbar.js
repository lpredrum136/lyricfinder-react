import React from 'react'
import PropTypes from 'prop-types'
import { Menu } from 'antd'

const Navbar = props => {
  return (
    <Menu theme='dark' mode='horizontal' style={menuStyle}>
      <Menu.Item>LyricFinder</Menu.Item>
    </Menu>
  )
}

const menuStyle = {
  textAlign: 'center',
  lineHeight: '46px',
  fontSize: '23px'
}

Navbar.propTypes = {}

export default Navbar
