import { combineReducers } from 'redux'
// import { RESET_APP } from '~d/actionTypes.js'
import period from '~r/period'
import search from '~r/search'
import history from '~r/history'

export default combineReducers({
    period,
    search,
    history
});


