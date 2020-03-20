import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd'

const Navbar = props => {
  return (
    <Menu theme='dark' mode='horizontal' style={menuStyle}>
      <Menu.Item>
        <Link to='/'>LyricFinder</Link>
      </Menu.Item>
    </Menu>
  )
}

const menuStyle = {
  textAlign: 'center',
  lineHeight: '46px',
  fontSize: '23px'
}

export default Navbar
