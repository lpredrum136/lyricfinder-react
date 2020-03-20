import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { findTrack } from '../../actions/trackActions'
import { Card, Typography, Form, Input, Button } from 'antd'

const { Paragraph, Title } = Typography

const Search = ({ myTrack, findTrack }) => {
  const [searchState, setSearchState] = useState({
    trackTitle: ''
  })

  const { trackTitle } = searchState

  const onChange = event => {
    setSearchState({ [event.target.name]: event.target.value })
  }

  const onSubmit = submittedValues => {
    findTrack(trackTitle)
    setSearchState({ trackTitle: '' })
  }

  return (
    <Card style={indexCardStyle}>
      <Title>
        <i className='fas fa-music' aria-hidden='true'></i> Search For A Song
      </Title>
      <Paragraph>Get the lyrics for any song</Paragraph>
      <Form size='large' onFinish={onSubmit} style={searchFormStyle}>
        <Form.Item>
          <Input
            placeholder='Song title...'
            name='trackTitle'
            onChange={onChange}
            value={trackTitle}
            allowClear
          />
        </Form.Item>
        <Form.Item>
          <Button block type='primary' htmlType='submit'>
            Search
          </Button>
        </Form.Item>
      </Form>
    </Card>
  )
}

const indexCardStyle = {
  textAlign: 'center',
  margin: '0 20px 20px'
}

const searchFormStyle = {
  width: '50%',
  margin: 'auto'
}

Search.propTypes = {
  myTrack: PropTypes.object.isRequired,
  findTrack: PropTypes.func.isRequired
}

const mapStateToProps = state => ({ myTrack: state.myTrack })

export default connect(mapStateToProps, { findTrack })(Search)
