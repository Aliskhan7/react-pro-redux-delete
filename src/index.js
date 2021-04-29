import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import "./style.css"

const initialState = {
    todos: [],
    loading: false
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case 'load':
            return{
                ...state,
                todos: action.payload,
                loading: false
            }
        case 'start':
            return{
                ...state,
                loading: true
            }
        case 'delete':
            return{
                ...state,
                todos: state.todos.filter(item =>{
                    if(item.id === action.payload){
                        return false;
                    }
                    return true;
                })
            }
        default:
            return state;
    }
}

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
        <div className='container'>
            <App />
        </div>
    </Provider>,
  document.getElementById('root')
);

