import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux/lib'
import { loadingBarReducer } from 'react-redux-loading-bar'

import carsReducer from './cars'
import fullOfCarListReducer from './fullOfCarList'

const reducers = combineReducers({
    cars: carsReducer,
    fullOfCarList: fullOfCarListReducer,
    loadingBar: loadingBarReducer,
    routing: routerReducer
});

export default reducers
