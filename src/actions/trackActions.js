import axios from 'axios'
import { GET_TOP_TRACKS } from './types'

//
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
