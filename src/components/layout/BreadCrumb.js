import React from 'react'
import PropTypes from 'prop-types'
import { Breadcrumb } from 'antd'

const BreadCrumb = props => {
  return (
    <Breadcrumb style={{ margin: '16px 0' }}>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>List</Breadcrumb.Item>
      <Breadcrumb.Item>App</Breadcrumb.Item>
    </Breadcrumb>
  )
}

BreadCrumb.propTypes = {}

export default BreadCrumb
