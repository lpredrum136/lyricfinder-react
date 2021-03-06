import React from 'react'
import { Layout } from 'antd'

const { Footer } = Layout

const AppFooter = props => {
  return (
    <Footer style={footerStyle}>
      LyricFinder ©2020 Created by Henry Nguyen
    </Footer>
  )
}

const footerStyle = {
  textAlign: 'center'
}

export default AppFooter
