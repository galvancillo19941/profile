import { fromJS } from 'immutable'
import { combineReducers } from 'redux-immutable'
import typeActions from './type-actions'

const initialState = fromJS({
    headerItems: {
        data: {},
        errors: {}
    }
})

function headerErrorsReducer (state = initialState.get('headerItems').get('errors'), action = {}) {
    if (action.type === typeActions.HEADER_ERROR) {
        return action.payload
    } else {
        return state
    }
}

function headerDataReducer (state = initialState.get('headerItems').get('data'), action = {}) {
    switch (action.type) {
        case typeActions.HEADER_LOAD:
            return action.payload
        default:
            return state
    }
}

const headerReducer = combineReducers({
    headerDataReducer,
    headerErrorsReducer
})

export default headerReducer
