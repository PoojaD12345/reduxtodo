
import {legacy_createStore,combineReducers,applyMiddleware,compose} from 'redux'
// import { legacy_createStore,combineReducers,applyMiddleware ,compose} from "redux";
import {counterReducer} from "./CounterApp/counte.reducer";
import {todoReducer} from "./TodoApp/todo.reducer";



const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;


const rootreducer = combineReducers ({
    counter:counterReducer,
    todo:todoReducer,
})

export const store = legacy_createStore(rootreducer, composeEnhancers(applyMiddleware()));