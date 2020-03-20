import React, { Fragment, useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getTracks } from '../../actions/trackActions'
import Spinner from '../layout/Spinner'
import SingleTrack from './SingleTrack'
import { Row, Typography, Button } from 'antd'

const { Title } = Typography

const Tracks = ({ getTracks, myTrack }) => {
  const { trackList, heading, loading, inSearchMode } = myTrack

  useEffect(() => {
    if (!inSearchMode) getTracks()
  }, [inSearchMode, getTracks])

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <Title style={tracksHeadingStyle}>
            {heading}{' '}
            {inSearchMode && (
              <Button type='primary' shape='circle' onClick={getTracks}>
                <i className='fas fa-redo-alt'></i>
              </Button>
            )}
          </Title>

          <Row>
            {trackList.map(trackItem => (
              <SingleTrack
                track={trackItem.track}
                key={trackItem.track.track_id}
              />
            ))}
          </Row>
        </Fragment>
      )}
    </Fragment>
  )
}

const tracksHeadingStyle = {
  textAlign: 'center'
}

Tracks.propTypes = {
  getTracks: PropTypes.func.isRequired,
  myTrack: PropTypes.object.isRequired
}

const mapStateToProps = state => ({ myTrack: state.myTrack })

export default connect(mapStateToProps, { getTracks })(Tracks)
