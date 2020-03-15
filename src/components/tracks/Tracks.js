import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getTracks } from '../../actions/trackActions'

const Tracks = ({ getTracks, myTrack }) => {
  useEffect(() => {
    getTracks()
  }, [getTracks])

  return (
    <div>
      <h1>Tracks</h1>
    </div>
  )
}

Tracks.propTypes = {
  getTracks: PropTypes.func.isRequired,
  myTrack: PropTypes.object.isRequired
}

const mapStateToProps = state => ({ myTrack: state.myTrack })

export default connect(mapStateToProps, { getTracks })(Tracks)
