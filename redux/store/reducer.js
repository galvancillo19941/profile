// Dependencies
import { combineReducers } from 'redux-immutable'

import  headerReducer  from '../reducers/header/reducer'

const reducer = combineReducers({
    headerItems: headerReducer
})

export default reducer
