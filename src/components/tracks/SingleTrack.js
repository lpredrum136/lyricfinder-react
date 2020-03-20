import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Card, Typography, Button } from 'antd'
import { PlayCircleOutlined, ReadOutlined } from '@ant-design/icons'
import { grey } from '@ant-design/colors'

const { Paragraph, Text } = Typography

const SingleTrack = ({ track }) => {
  return (
    <Col md={12}>
      <Card title={track.artist_name} style={singleTrackStyle}>
        <Paragraph>
          <Text strong>
            <PlayCircleOutlined /> Track
          </Text>
          : {track.track_name}
          <br />
          <Text strong>
            <i className='fas fa-compact-disc'></i> Album
          </Text>
          : {track.album_name}
        </Paragraph>
        <Link to={`lyrics/track/${track.track_id}`}>
          <Button type='link' block style={viewLyrics}>
            <ReadOutlined />
            View Lyrics
          </Button>
        </Link>
      </Card>
    </Col>
  )
}

const singleTrackStyle = {
  margin: '20px'
}

const viewLyrics = {
  backgroundColor: grey.primary,
  color: 'white'
}

export default SingleTrack
