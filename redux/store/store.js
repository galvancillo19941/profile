import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import thunkMiddleware from 'redux-thunk'
import reducer from './reducer'
import { fromJS } from 'immutable'

const InitialState = fromJS({
    headerItems: {},
})

export const makeStore = (initialState = InitialState) => {
    return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}
