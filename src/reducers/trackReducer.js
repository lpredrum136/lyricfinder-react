import { GET_TOP_TRACKS, FIND_TRACK } from '../actions/types'

const initialState = {
  trackList: [],
  heading: '',
  loading: true,
  inSearchMode: false
}

const trackReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case GET_TOP_TRACKS:
      return {
        ...state,
        heading: 'Top 10 Tracks',
        trackList: payload,
        loading: false,
        inSearchMode: false
      }

    case FIND_TRACK:
      return {
        ...state,
        trackList: payload.trackList,
        heading: `Search Results for "${payload.trackTitle}"`,
        inSearchMode: true
      }

    default:
      return state
  }
}

export default trackReducer
