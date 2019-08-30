import { combineReducers } from 'redux'
import { ALL_ANIME } from '../actions/types'

const initialState = {
  anime: []
}

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case ALL_ANIME:
        return ({
          ...state,
          anime: state.anime.concat(action.payload)
        })
      break
  }
  return state
}

export default rootReducer