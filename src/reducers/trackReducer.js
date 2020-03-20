import { GET_TOP_TRACKS, FIND_TRACK } from '../actions/types'

const initialState = {
  trackList: [],
  heading: 'Top 10 Tracks',
  loading: true
}

const trackReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case GET_TOP_TRACKS:
      return { ...state, trackList: payload, loading: false }

    case FIND_TRACK:
      return {
        ...state,
        trackList: payload.trackList,
        heading: `Search Results for "${payload.trackTitle}"`
      }

    default:
      return state
  }
}

export default trackReducer
