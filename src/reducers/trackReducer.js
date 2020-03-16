import { GET_TOP_TRACKS } from '../actions/types'

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

    default:
      return state
  }
}

export default trackReducer
