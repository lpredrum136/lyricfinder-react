import axios from 'axios'
import { GET_TOP_TRACKS, FIND_TRACK } from './types'

// Get top 10 tracks
export const getTracks = () => {
  const dispatchGetTracks = async dispatch => {
    try {
      const res = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=au&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`
      )

      dispatch({
        type: GET_TOP_TRACKS,
        payload: res.data.message.body.track_list
      })
    } catch (error) {
      console.log(error)
    }
  }

  return dispatchGetTracks
}

// Search for a song
export const findTrack = trackTitle => {
  const dispatchFindTrack = async dispatch => {
    try {
      const res = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=${trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_KEY}`
      )

      // console.log(res.data)
      dispatch({
        type: FIND_TRACK,
        payload: { trackList: res.data.message.body.track_list, trackTitle }
      })
    } catch (error) {
      console.log(error)
    }
  }

  return dispatchFindTrack
}
