import { combineReducers } from 'redux'
import gameSetting from './gameSetting'
import history from './history'
import isDescending from './isDescending'
import step from './step'
import xIsNext from './xIsNext'

const caroApp = combineReducers({
  gameSetting,
  history,
  isDescending,
  step,
  xIsNext
})

export default caroApp
