import React from 'react'
import { Row, Spin } from 'antd'

const Spinner = props => {
  return (
    <Row justify='center'>
      <Spin size='large' />
    </Row>
  )
}

Spinner.propTypes = {}

export default Spinner
