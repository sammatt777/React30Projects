import { createStore } from "redux";

import { AllReducers, addToCartReducer, renderDataReducer } from './Reducer/Reducer'


let store = createStore(AllReducers)


export default store
